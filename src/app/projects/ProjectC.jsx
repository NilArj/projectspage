import React from "react";

const ProjectC = () => {
  return (
    <section id="c">
      <div className="md:px-6 overflow-hidden">
        <h2 className="text-[#FFCE63] font-semibold text-center text-lg mt-6 sm:text-2xl">
          Python | SQL
        </h2>
        <h2 className="text-yellow-primary text-center mb-6 text-lg sm:text-2xl">
          Drag Show Analysis
        </h2>
        <p className="text-[#F0F0F0] italic font-light underline-offset-4 mb-6 text-base text-justify sm:text-xl">
          Imagine diving into the glitzy world of {`"La mas draga,"`} a
          thrilling drag competition akin to the iconic{" "}
          {`"RuPaul's Drag Race."`} The quest was simple: uncover the secret
          recipe behind the success of the top four contestants across all
          seasons
        </p>
        <p className="text-yellow-primary text-center mb-4 text-base sm:text-xl sm:text-left">
          Questions & Analysis
        </p>
        <ul className="text-[#F0F0F0] italic font-light list-disc pl-8 mb-4 text-base text-justify sm:text-xl sm:pl-16">
          <li className="mb-2">How old are these sensational performers?</li>
          <li className="mb-2">
            Where do they hail from, adding their unique flair to the
            competition?
          </li>
          <li>
            What scores do they aim for to secure their spot and dazzle the
            judges?
          </li>
        </ul>
        <div className="bg-blue-secondary p-4">
          <p>
            Average score a participant should aim for in each episode of the
            season script:
          </p>
          <pre>
            <code
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{
                __html: `
                select round(avg(s.calificacion),2)
                from la_mas_draga_scores as s
                join la_mas_draga as d 
                on d.participante = s.concursante
                where d.resultado in ("Ganadora", "Finalista", "Finalistas", "Finalista secreta")
  `,
              }}
            />
          </pre>
          <p>Top 4 contestants key elements table script:</p>
          <pre>
            <code
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{
                __html: `
                select 
                  d.lugar, 
                  d.participante, 
                  'lugar de residencia', 
                  d.edad, 
                  'retos ganados', 
                  d.resultado, 
                  d.temporada, 
                  sc.episodio, 
                  sc.progreso, 
                  sc.calificacion 
                from la_mas_draga as d
                join la_mas_draga_scores as sc
                on d.participante = sc.concursante
                where resultado in ("Ganadora", "Finalista", "Finalistas", "Finalista secreta")
                order by temporada asc
  `,
              }}
            />
          </pre>
        </div>

        <p className="text-yellow-primary text-center mt-6 mb-4 text-base sm:text-xl sm:text-left">
          A Journey Through Tools & Code
        </p>
        <ul className="text-[#F0F0F0] italic font-light list-disc pl-8 mb-6 text-base text-justify sm:text-xl sm:pl-16">
          <li className="mb-2">
            A Python script was used to extract, transform and transfer data to
            the database
          </li>
          <li className="mb-2">
            MySQL was used to analyze the data set using SQL queries
          </li>
        </ul>
        <p className="text-yellow-primary text-center mb-4 text-base sm:text-xl sm:text-left">
          Findings for the Ultimate Verdict
        </p>
        <ul className="text-[#F0F0F0] italic font-light list-disc pl-8 mb-4 text-base text-justify sm:text-xl sm:pl-16">
          <li className="mb-2">
            Maintaining an average score of at least 13.38 proved crucial to
            stay in the game and push towards the top
          </li>
          <li className="mb-2">
            Interestingly, the majority of these top four gems sashayed onto the
            stage from the vibrant cities of Guadalajara and Monterrey
          </li>
          <li className="mb-2">
            On average, these mesmerizing contestants adorned with creativity
            and talent tend to be around 29 years old, proving that brilliance
            transcends age
          </li>
        </ul>
        <p className="text-[#F0F0F0] italic font-light list-disc mb-6 text-base text-justify sm:text-xl">
          Considerations: It is important to understand the intricate nature of
          competitions. These insights are shaped not just by raw data but by
          the nuanced judgments of a panel assessing a diverse range of talents,
          styles, and personalities
        </p>
        <a
          href="https://github.com/NilArj/drag_show"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 mx-auto text-[#F0F0F0] text-center text-sm border border-solid border-[#FFCE63] px-5 py-3 w-full font-semibold sm:w-fit md:text-lg hover:bg-gradient-to-br hover:to-[#FFCE63] hover:from-[#0A133D]"
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
};

export default ProjectC;
