import Car from "./Car";

type CarType = {
    // todo
  }
  
function OverviewPage() {

    const cars : CarType[] = [
        {
            "Name": "chevrolet chevelle malibu",
            "Miles_per_Gallon": 18,
            "Cylinders": 8,
            "Displacement": 307,
            "Horsepower": 130,
            "Weight_in_lbs": 3504,
            "Acceleration": 12,
            "Year": "1970-01-01",
            "Origin": "USA",
            "id": 1
        },
        {
            "Name": "buick skylark 320",
            "Miles_per_Gallon": 15,
            "Cylinders": 8,
            "Displacement": 350,
            "Horsepower": 165,
            "Weight_in_lbs": 3693,
            "Acceleration": 11.5,
            "Year": "1970-01-01",
            "Origin": "USA",
            "id": 2
        }]

  return (
    <>
    <h1>All Cars</h1>
    {/* map here over cars. */}
    </>
  )
}

export default OverviewPage