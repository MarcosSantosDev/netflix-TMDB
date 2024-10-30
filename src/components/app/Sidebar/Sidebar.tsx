import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

const Sidebar = () => (
	<div className="p-md relative grid h-full max-w-full grid-rows-[60px_1fr_auto] gap-5">
		<Header />
		<Nav />
		<Footer />
	</div>
);

export default Sidebar;
