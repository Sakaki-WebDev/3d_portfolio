import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/profilepic.png" alt="grid-1" className="w-full sm:h-[200px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Campbell Casteel</p>
              <p className="grid-subtext">
                I recently graduated from a web development degree, with 3 years experience. I worked for a AzulStudio
                as a website tester and later interned as junior web developer whilst studying. I'm looking for a full
                time junior role as a web developer at a company where i can grow and develop my skills and experience.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid6.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I have worked and experimented with variety of languages, frameworks and design tools, these allow me to
                build effective and scalable and aesthetically pleasing applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={426}
                width={426}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.3}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'London, UK', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I am flexible with working for companies in different locations and timezones
              </p>
              <p className="grid-subtext">I am based in London, UK, but am open to remote work.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10 hover:bg-gray-900" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">A Charisma For Code</p>
              <p className="grid-subtext">
                When i was growing up, my Aunt was a programmer, she had a talent for working with computers and would
                build robots with us and show me how to test games and website code, shortcuts on the keyboard and so
                on. I had never seen anything so awesome and it inspired me alot. Later i helped her with some projects,
                including a website for an EA game, Dantes Inferno. I tested it. Something sparked within me and that is
                why i have a charisma for code.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  emailPlaceholder@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
