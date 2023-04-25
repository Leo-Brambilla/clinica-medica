import { IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import doctorImage from "../assets/doctor.jpg";
import doctor1Image from "../assets/doctor1.jpg";
import doctor3Image from "../assets/doctor4.jpg";

const images = [doctorImage, doctor1Image, doctor3Image];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = currentImageIndex + 1;
      setCurrentImageIndex(nextIndex < images.length ? nextIndex : 0);
    }, 15000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const handlePrevClick = () => {
    const prevIndex = currentImageIndex - 1;
    if (prevIndex >= 0) {
      setCurrentImageIndex(prevIndex);
    } else {
      setCurrentImageIndex(images.length - 1);
    }
  };

  const handleNextClick = () => {
    const nextIndex = currentImageIndex + 1;
    if (nextIndex < images.length) {
      setCurrentImageIndex(nextIndex);
    } else {
      setCurrentImageIndex(0);
    }
  };

  return (
    <div className="flex bg-blue-400">
      <div style={{ position: "relative", width: "700px", height: "auto" }}>
        <img
          src={images[currentImageIndex]}
          alt="Carousel Image"
          style={{ width: "100%", height: "auto" }}
        />
        <IconButton style={{ position: "absolute", top: "50%", left: 0 }} onClick={handlePrevClick}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton style={{ position: "absolute", top: "50%", right: 0 }} onClick={handleNextClick}>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
      <div className="flex flex-1 text-zinc-200 justify-center flex-col p-10">
        <h1 className="text-2xl font-bold flex justify-center gap-3 text-justify m-8">Medicina avançada de alta qualidade!</h1>
        <p>
          a Clínica Med One como um centro médico com uma ampla variedade de especialidades médicas. A clínica está localizada em uma área central da cidade e conta com uma equipe de profissionais altamente capacitados e equipamentos de última geração para garantir a segurança e o bem-estar dos pacientes. Além de oferecer serviços de diagnóstico e tratamento, a Med One tem como objetivo promover o cuidado preventivo e o tratamento eficaz das doenças. A clínica é referência em atendimento médico de qualidade e oferece um ambiente acolhedor e equipe multidisciplinar para cuidar da saúde dos pacientes de forma personalizada.
        </p>
      </div>
    </div>
  );
};

export default Carousel;
