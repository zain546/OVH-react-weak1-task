import BMICalculator from "./Components/BMICalculator";

const App = () => {
  return (
    <>
      <p className="text-3xl font-bold tracking-wide p-4 pl-10">Zain.</p>
      <div className="text-center mt-[10%] md:mt-[5%] flex flex-col items-center justify-center border-red-100">
        <h1 className="md:text-6xl font-bold text-4xl">BMI Calculator!</h1>
        <h2 className="md:text-3xl text-2xl font-bold">(OVH Weak 1 Task)</h2>
      </div>
      <BMICalculator />
    </>
  );
};

export default App;
