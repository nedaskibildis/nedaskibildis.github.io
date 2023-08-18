function AboutMe () {
    return (
        <div className="h-screen bg-white flex flex-col justify-center items-center md:flex-row" id="about-me">
      <div className="flex flex-col items-center md:items-end md:mr-8">
        <p className="font-face-lg text-3xl mb-2">About Me</p>
        <div className="w-48 h-2 bg-black mb-3"></div>
        <p className="max-w-xs text-right paragraph-font text-2xl md:block hidden">
          I'm Nedas, Nice To Meet You, Please Take A Look Around
        </p>
      </div>
      <div className="md:w-1/3 max-w-md paragraph-font text-sm md:text-base md:text-left text-center md:block w-1/2">
        I am a software developer currently studying Computer Science at The
        University Of Guelph. I am passionate about software development and
        design, and am always looking to learn new things. I also enjoy
        videography and photography, and love clearing my head by getting in a
        good workout.
      </div>
    </div>
    )
}

export default AboutMe;