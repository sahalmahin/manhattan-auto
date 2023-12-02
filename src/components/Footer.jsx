const Footer = () => {
    return (
       <div>
         <footer className="footer p-10 bg-violet-400 text-base-content">
            <aside>
                <img className="w-20 h-20 rounded-full" src="https://i.ibb.co/GVvBz1S/logo-manhattan.png" alt="" />
                <p className=" text-black font-semibold">Manhattan Auto Ltd.<br />Providing Reliable Auto Service Since 1992</p>
            </aside>
            <nav>
                <header className="text-black font-extrabold">Services</header>
                <a className="link link-hover text-black font-semibold">Branding</a>
                <a className="link link-hover text-black font-semibold">Design</a>
                <a className="link link-hover text-black font-semibold">Marketing</a>
                <a className="link link-hover text-black font-semibold">Advertisement</a>
            </nav>
            <nav>
                <header className="text-black font-extrabold">Company</header>
                <a className="link link-hover text-black font-semibold">About us</a>
                <a className="link link-hover text-black font-semibold">Contact</a>
                <a className="link link-hover text-black font-semibold">Jobs</a>
                <a className="link link-hover text-black font-semibold">Press kit</a>
            </nav>
            <nav>
                <header className="text-black font-extrabold">Legal</header>
                <a className="link link-hover text-black font-semibold">Terms of use</a>
                <a className="link link-hover text-black font-semibold">Privacy policy</a>
                <a className="link link-hover text-black font-semibold">Cookie policy</a>
            </nav>
        </footer>
       </div>
    );
};

export default Footer;