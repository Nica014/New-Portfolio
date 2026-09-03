const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="border-t border-[#e5e5ea]">
        <div className="py-6 text-center">
          <p className="text-sm text-[#515151]">
            © {new Date().getFullYear()} Nica Alimurung. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
