import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';
import HmacSHA256 from 'crypto-js/hmac-sha256';
import { jwtDecode } from 'jwt-decode';

import { defaultUserAuthenticatedData } from './auth.fixtures';

const jwtSecret = 'some-secret-code-goes-here';

const base64url = (source: CryptoJS.lib.WordArray) => {
	// Encode in classical base64
	let encodedSource = Base64.stringify(source);

	// Remove padding equal characters
	encodedSource = encodedSource.replace(/=+$/, '');

	// Replace characters according to base64url specifications
	encodedSource = encodedSource.replace(/\+/g, '-');
	encodedSource = encodedSource.replace(/\//g, '_');

	// Return the base64 encoded string
	return encodedSource;
};

export const generateJWTToken = (tokenPayload: { [key: string]: unknown }) => {
	// Define token header
	const header = {
		alg: 'HS256',
		typ: 'JWT',
	};

	// Calculate the issued at and expiration dates
	const date = new Date();
	const iat = Math.floor(date.getTime() / 1000);
	const exp = Math.floor(date.setDate(date.getDate() + 7) / 1000);

	// Define token payload
	const payload: unknown = {
		iss: '', //issuer(emissor)
		exp, //expiration time(emissor)
		iat, //issued at(emitida em)
		...tokenPayload,
	};

	// Stringify and encode the header
	const stringifiedHeader = Utf8.parse(JSON.stringify(header));
	const encodedHeader = base64url(stringifiedHeader);

	// Stringify and encode the payload
	const stringifiedPayload = Utf8.parse(JSON.stringify(payload));
	const encodedPayload = base64url(stringifiedPayload);

	// Sign the encoded header and mock-api
	let signature = `${encodedHeader}.${encodedPayload}`;
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	signature = HmacSHA256(signature, jwtSecret);
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	signature = base64url(signature);

	// Build and return the token
	return `${encodedHeader}.${encodedPayload}.${signature}`;
};

export const verifyJWTToken = (token: string) => {
	// Split the token into parts
	const parts = token.split('.');
	const header = parts[0];
	const payload = parts[1];
	const signature = parts[2];

	// Re-sign and encode the header and payload using the secret
	const signatureCheck = base64url(HmacSHA256(`${header}.${payload}`, jwtSecret));

	// Verify that the resulting signature is valid
	return signature === signatureCheck;
};

type GenerateAccessTokenParams = {
	authHeader?: string;
};

type GenerateAccessTokenReturn = {
	accessToken: string;
};

export const generateAccessToken = ({ authHeader }: GenerateAccessTokenParams): GenerateAccessTokenReturn | null => {
	if (!authHeader) {
		return null;
	}

	const [scheme, accessToken] = authHeader.split(' ');

	if (scheme !== 'Bearer' || !accessToken) {
		return null;
	}

	if (verifyJWTToken(accessToken)) {
		const { id }: { id: string } = jwtDecode(accessToken);

		if (defaultUserAuthenticatedData) {
			const accessToken = generateJWTToken({ id });
			return { accessToken };
		}
	}

	return null;
};
