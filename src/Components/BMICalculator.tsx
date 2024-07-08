import { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [bmi, setBmi] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [imgSrc, setImgSrc] = useState<string>("");

  const calculateBmi = (event: React.FormEvent) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      setMessage("Please enter your weight and height values.");
    } else {
      const bmiValue = (weight / ((height * height) / 10000)).toFixed(1);
      setBmi(parseFloat(bmiValue));

      if (parseFloat(bmiValue) < 18.5) {
        setMessage(
          "You are underweight 🙄, let me give you something to eat 🥘."
        );
        setImgSrc("/Images/underweight.png");
      } else if (parseFloat(bmiValue) >= 18.5 && parseFloat(bmiValue) < 24.9) {
        setMessage("You are at a healthy weight 🤗, keep it!");
        setImgSrc("/Images/normalWeight.png");
      } else if (parseFloat(bmiValue) >= 24.9 && parseFloat(bmiValue) < 30) {
        setMessage("You are overweight 🧐, do some exercise!");
        setImgSrc("/Images/overWeight.png");
      } else {
        setMessage("You are obese 🙃, nothing to say you just keep eating!");
        setImgSrc("/Images/obese.png");
      }
    }
  };

  return (
    <>
      <div className="flex md:flex-row flex-col items-center justify-center md:gap-8 gap-6 md-p-0 px-4 md:w-[80%] w-[90%] m-auto mt-20 md:mt-12">
        <div className="relative input-div w-full md:w-[48%]">
          <label
            className="absolute pl-1 -top-3 left-3 bg-[#101a2f]"
            htmlFor="Weight"
          >
            Weight (kg)
          </label>
          <input
            className="w-full rounded-sm text-xl bg-transparent border p-3 outline-none focus:border-[#38bff8]"
            type="number"
            id="Weight"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>
        <div className="relative input-div w-full md:w-[48%]">
          <label
            className="absolute pl-1 -top-3 left-3 bg-[#101a2f]"
            htmlFor="height"
          >
            Height (cm)
          </label>
          <input
            className="w-full rounded-sm text-xl bg-transparent border p-3 outline-none focus:border-[#38bff8]"
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </div>
      </div>
      <button
        onClick={calculateBmi}
        className="bg-[#16314B] text-white py-2 px-4 font-bold rounded-sm m-auto block mt-8"
      >
        Calculate
      </button>
      <div className="result w-[80%] m-auto text-center mt-10">
        <h6 className="mx-2">Your BMI: {bmi}</h6>
        <p className="text-sm md:text-lg">{message}</p>
        {imgSrc && (
          <div className="img-cont h-48">
            <img
              src={imgSrc}
              className="block m-auto h-[100%]"
              alt="BMI category"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default BMICalculator;
