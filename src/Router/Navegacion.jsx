import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Informacion from "../components/Informacion";
import Notificacion from "../components/Notificacion";
import BottomNav from "../components/BottomNav.jsx";
import "./Navegacion.css";
import Historial from "../components/Historial";
import Profile from "../components/Profile.jsx";
import EditarPerfil from "../components/EditarPerfil.jsx";
import SobreGym from "../components/SobreGym.jsx";
import Calendario from "../components/Calendario.jsx";
import SocialPage from "../components/TarjetaSocial/SocialPage";
import HomePage from "../components/ejercicios/HomePage";
import ExercisePage from "../components/InfoTar/ExercisePage";
import ExerciseDetailPage from "../components/ejercicios/ExerciseDetailPage.jsx";
import PersonalizedRoutinesPage from "../components/ejercicios/PersonalizedRoutinesPage.jsx";
import MenuInter from "../components/Entrenador/MenuInter.jsx";
import Aprendiz from "../components/Entrenador/Aprendiz.jsx";
import Cronograma from "../components/Entrenador/Cronograma.jsx";
import Membresia from "../components/Entrenador/Membresia.jsx";
import NotiEntre from "../components/Entrenador/NotiEntre.jsx";
import EnviarNoti from "../components/Entrenador/EnviarNoti.jsx";
import Descanso from "../components/Descanso.jsx";
import Nutricion from "../components/Chatbot/Nutricion.jsx";
import MusicPlayer from "../components/MusicPlayer";

function Navegacion() {
  return (
    <div className="navContainer">
      <div className="compContainer">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/informacion" element={<Informacion />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/notificacion" element={<Notificacion />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ediprofile" element={<EditarPerfil />} />
          <Route path="/sobreG" element={<SobreGym />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/rutina" element={<HomePage />} />
          <Route path="/ejercicio" element={<ExercisePage />} />
          <Route path="/exercise-detail" element={<ExerciseDetailPage />} />
          <Route path="/personalized-routines" element={<PersonalizedRoutinesPage />} />
          <Route path="/menuIn" element={<MenuInter />} />
          <Route path="/aprend" element={<Aprendiz />} />
          <Route path="/crono" element={<Cronograma />} />
          <Route path="/membr" element={<Membresia />} />
          <Route path="/notiEnt" element={<NotiEntre />} />
          <Route path="/EnviNot" element={<EnviarNoti />} />
          <Route path="/descanso" element={<Descanso />} />
          <Route path="/nutricion" element={<Nutricion />} />
          <Route path="/music" element={<MusicPlayer />} />
          <Route path="/*" element={<p>Error 404 Recurso no encontrado</p>} />
        </Routes>
        <BottomNav />
      </div>
    </div>
  );
}

export default Navegacion;
