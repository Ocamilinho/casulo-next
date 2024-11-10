'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Link from "next/link";
import TimelineItem from "@/components/cronograma/TimelineItem";
import * as Papa from 'papaparse';

type TimelineCsv = {
  title: string;
  desc: string;
  imageUrl: string;
  date: Date;
};

export default function Cronograma() {
  const [timelineData, setTimelineData] = useState<TimelineCsv[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | null>(null); 
  useEffect(() => {
    Papa.parse("/timeline.csv", {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        const formattedData = result.data.map((item: any) => {
          const parsedDate = new Date(item.date);
          const validDate = parsedDate instanceof Date && !isNaN(parsedDate.getTime()) ? parsedDate : new Date();
          return {
            ...item,
            date: validDate,
          };
        });

        setTimelineData(formattedData);
        const extractedYears = Array.from(
          new Set(formattedData.map(item => item.date.getFullYear()))
        );
        setYears(extractedYears.sort((a, b) => a - b));
      },
      error: (err) => {
        console.error("Erro ao ler CSV:", err);
      },
    });
  }, []);
  const filteredData = selectedYear
    ? timelineData.filter(item => item.date.getFullYear() === selectedYear)
    : timelineData; 

  return (
    <>
      <Header />
      <div className="text-center p-10 bg-greve shadow-x">
        <h2 className="timeline-header__title">Atividades do Coletivo Casulo</h2>
        <h3 className="timeline-header__subtitle">Cursos, debates, rodas de conversa</h3>
      </div>
      <div className="p-4 bg-cinza">
        <ul className="flex gap-4 justify-center flex-wrap">
          {years.map((year) => (
            <li
              key={year}
              className={`text-xl font-semibold text-branco cursor-pointer ${selectedYear === year ? 'text-yellow-400' : ''}`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </li>
          ))}
          <li
            className={`text-xl font-semibold text-branco cursor-pointer ${selectedYear === null ? 'text-yellow-400' : ''}`}
            onClick={() => setSelectedYear(null)}
          >
            Todos
          </li>
        </ul>
      </div>
      <div className="w-full relative bg-fixed bg-cover bg-preto p-16 min-h-screen" id="timeline-1" >
        <div className="flex flex-wrap flex-col-reverse relative gap-20 flex-grow">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <TimelineItem
                key={index}
                desc={item.desc}
                date={item.date}
                imageUrl={item.imageUrl}
              />
            ))
          ) : (
            <p className="text-branco">Carregando cronograma...</p> // Mensagem enquanto os dados não são carregados
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
