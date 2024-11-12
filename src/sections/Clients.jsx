import { useState } from 'react';

const Client = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' campbellcasteel@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Reach Out</h3>
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0  z-0 " />
        <div className="space-y-2 z-10">
          <h2 className="text-2xl text-white text-center">Feel Free To Contact Me</h2>
          <p className="grid-subtext text-2xl text-center mt-10"></p>

          <div className="copy-container mt-10" onClick={handleCopy}>
            <img className="mt-10" src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
            <p className=" mt-10 lg:text-2xl md:text-xl font-medium text-gray_gradient text-white hover:text-purple-800">
              Click to copy my email
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
