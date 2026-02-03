import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-900 via-primary-900 to-dark-900 text-white py-16">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
              About TianoShield
            </span>
          </h1>
          
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border-t-4 border-primary-500">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              A firmware program is embedded in non-volatile storage on a computer's motherboard. It controls how our
              computing devices, ranging from cloud servers to resource-constrained Internet of Things (IoT) platforms,
              start up their boot processes, and interact with their operating systems after they are powered on.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The <strong>Unified Extensible Firmware Interface (UEFI)</strong> is an open standard for computing system firmware architecture
              specification. The TianoCore community maintains reference implementations of various components
              of the UEFI specification, for example, EDK II. This has resulted in a vibrant and mature open-source
              ecosystem with a significant impact on the national security, safety, and privacy of the U.S. and its allies.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Given the widespread use of the TianoCore repositories, security vulnerabilities may
              be leveraged by malicious actors to develop exploits that could cause potentially
              massive-scale harm to global citizens and businesses, for example, as part of the Advanced Persistent Threat
              (APT) activities.
            </p>

            <div className="bg-gradient-to-r from-primary-50 to-accent-50 border-l-4 border-primary-500 p-6 my-8 rounded-r-lg">
              <p className="text-gray-800 font-semibold text-lg">
                TianoShield aims to focus on enhancing the state of security of the TianoCore ecosystem
                and improving its overall open-source development process and practices.
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;