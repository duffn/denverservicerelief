import React from "react"

const Featured = () => (
  <div className="mb-10 border shadow p-6">
    <h2 className="text-xl font-bold">
      Featured: Denver Public Schools Foundation Food Security Fund
    </h2>

    <p className="mt-4">
      Many of our children rely on school meals during the school day.
      Currently, nearly 64% qualify for Free and Reduced Lunch each day.
      Together with the district, the DPS Foundation is working to rally behind
      our school community to leverage DPS's already existing resources to help
      fulfill the food security needs of our families.
    </p>

    <p className="mt-4">
      <a
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        href="https://dpsfoundation.org/foodsecurityfund/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Donate Here
      </a>
    </p>
  </div>
)

export default Featured
