'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import TimelineItem from "@/components/cronograma/TimelineItem";
import { Data } from "@/public/data-timeline";
import { v4 as uuidv4 } from 'uuid'; 

type Timeline = {
  id: string;
  title: string;
  desc: string;
  imageUrl?: string;
  date: Date;
};

export default function Cronograma() {
  const [timelineData, setTimelineData] = useState<Timeline[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | null>(null); 
  const [filteredData, setFilteredData] = useState<Timeline[]>([]);

  useEffect(() => {
    const parsedData = Data.map((item: any) => ({
      id: uuidv4(), 
      title: item.title,
      desc: item.desc,
      imageUrl: item.imageUrl,
      date: new Date(item.date),
    })).filter(item => !isNaN(item.date.getTime())) as Timeline[];

    const sortedData = parsedData.sort((a, b) => a.date.getTime() - b.date.getTime());
    setTimelineData(sortedData);
    setFilteredData(sortedData);
    const uniqueYears = Array.from(new Set(sortedData.map(item => item.date.getFullYear()))).sort((a, b) => a - b);
    setYears(uniqueYears);
  }, []);

  useEffect(() => {
    if (selectedYear !== null) {
      const newFilteredData = timelineData.filter(item => item.date.getFullYear() === selectedYear);
      console.log(`Filtered data for year ${selectedYear}:`, newFilteredData); // Debug log
      setFilteredData(newFilteredData);
    } else {
      setFilteredData(timelineData);
    }
  }, [selectedYear, timelineData]);

  const filterData = (year: number | null) => {
    setSelectedYear(year);
  };

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
              className={`text-xl text-branco cursor-pointer ${selectedYear === year ? 'font-bold' : ''}`}
              onClick={() => filterData(year)}
            >
              {year}
            </li>
          ))}
          <li
            className={`text-xl font-semibold text-branco cursor-pointer ${selectedYear === null ? 'font-bold' : ''}`}
            onClick={() => filterData(null)}
          >
            Todos
          </li>
        </ul>
      </div>
      <div className="w-full relative bg-fixed bg-cover bg-preto p-16 min-h-screen" id="timeline-1">
        <div className="flex flex-wrap flex-col-reverse relative gap-20 flex-grow">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <TimelineItem
                key={item.id} 
                desc={item.desc}
                date={item.date}
                imageUrl={item.imageUrl || ''} 
              />
            ))
          ) : (
            <p className="text-branco">Carregando cronograma...</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
