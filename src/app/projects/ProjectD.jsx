import React from "react";

const ProjectD = () => {
  return (
    <section id="d">
      <div className="md:px-6 overflow-hidden">
        <h2 className="text-[#FFCE63] font-semibold text-center text-lg mt-6 sm:text-2xl">
          Python
        </h2>
        <h2 className="text-yellow-primary text-center mb-6 text-lg sm:text-2xl">
          Predicting {`Mexico's`} Economic Growth
        </h2>
        <p className="text-[#F0F0F0] italic font-light underline-offset-4 mb-6 text-base text-justify sm:text-xl">
          In a quest to forecast {`Mexico's`} economic growth, this data-driven
          expedition dives deep into Banco de {`Mexico's`} datasets, employing
          Python and machine learning techniques. The goal is crystal clear:
          predict the Gross Domestic Product (PIB) for the upcoming years
        </p>
        <p className="text-yellow-primary text-center mb-4 text-base sm:text-xl sm:text-left">
          Questions & Analysis
        </p>
        <ul className="text-[#F0F0F0] italic font-light list-disc pl-8 mb-4 text-base text-justify sm:text-xl sm:pl-16">
          <li className="mb-2">
            How will {`Mexico's`} economy fare in the near future?{" "}
          </li>
        </ul>
        <div className="bg-blue-secondary p-4">
          <pre>
            <code
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{
                __html: `
                # prepare the data 
                X = df_v1["Year"].values.reshape(-1,1)
                y = df_v1["PIB"]

                # splitting the dataset into the training set and test set
                from sklearn.model_selection import train_test_split
                X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.90, random_state = 42)

                # training the linear regression model on the Training set
                from sklearn.linear_model import LinearRegression
                regressor = LinearRegression()
                regressor.fit(X_train, y_train)

                # predict
                print(regressor.predict([[2021]]))
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
            Python programming language for dissecting and analyzing the data.
          </li>
          <li className="mb-2">
            Pandas: The toolkit employed for seamless data manipulation and
            analysis
          </li>
          <li className="mb-2">
            Scikit-learn (Sklearn): Harnessing machine learning for predictive
            modeling
          </li>
          <li className="mb-2">
            Linear Regression Model: The key to forecasting {`Mexico's`}{" "}
            economic growth with precision
          </li>
        </ul>
        <p className="text-yellow-primary text-center mb-4 text-base sm:text-xl sm:text-left">
          Findings for the Ultimate Verdict
        </p>
        <ul className="text-[#F0F0F0] italic font-light list-disc pl-8 mb-4 text-base text-justify sm:text-xl sm:pl-16">
          <li className="mb-2">
            Prediction Outcome: Utilizing linear regression, the projected
            growth for {`Mexico's`} economy in 2021 stands at 4.74% and 4.96% in
            2024
          </li>
          <li className="mb-2">
            Official Government Data: {`Mexico's`} economy grew by 4.8% in 2021,
            as per the Government of {`Mexico's`} official page.
          </li>
        </ul>
        <p className="text-[#F0F0F0] italic font-light list-disc pl-8 mb-6 text-base text-justify sm:text-xl sm:pl-16">
          Considerations: The dataset used for prediction is limited in size
        </p>
        <a
          href="https://github.com/NilArj/Predicting-Mexico-s-Economic-Growth"
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

export default ProjectD;
