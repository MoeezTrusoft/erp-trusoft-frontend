import Draggable from 'react-draggable';
import { useState } from 'react';
import CandidateCard from './CandidateCard';

const initialData = {
  applied: [
    { id: '1', name: 'Ayesha Khan', role: 'UI Designer Applicant', experience: '3 years of experience', status: 'Applied', time: '2 minutes ago' },
    { id: '2', name: 'Ayesha Khan', role: 'UI Designer Applicant', experience: '3 years of experience', status: 'Applied', time: '2 minutes ago' },
    { id: '3', name: 'Ayesha Khan', role: 'UI Designer Applicant', experience: '3 years of experience', status: 'Applied', time: '2 minutes ago' },
    { id: '4', name: 'Ayesha Khan', role: 'UI Designer Applicant', experience: '3 years of experience', status: 'Applied', time: '2 minutes ago' },
    { id: '5', name: 'Ayesha Khan', role: 'UI Designer Applicant', experience: '3 years of experience', status: 'Applied', time: '2 minutes ago' },
  ],
  screening: [
    { id: '6', name: 'Ayesha Khan', role: 'UI Designer Applicant', experience: '3 years of experience', status: 'due', time: '2 minutes ago' },
  ],
  interview: [
    { id: '7', name: 'Hamza Khan', role: 'Full Stack Developer', experience: '6 years of experience', status: 'Scheduled', time: '1 hour ago' },
    { id: '8', name: 'Hamza Ali', role: 'Full Stack Developer', experience: '3 years of experience', status: 'Scheduled', time: '2 hours ago' },
  ],
  offer: [
    { id: '9', name: 'Bilal Khan', role: 'DevOps Engineer', experience: '7 years of experience', status: 'Offered', time: '1 day ago' },
  ],
  // hired: [
  //   { id: '10', name: 'Bilal Khan', role: 'DevOps Engineer', experience: '7 years of experience', status: 'Hired', time: '3 days ago' },
  // ],
  // rejected: [{ id: '8', name: 'Bilal Khan', role: 'DevOps Engineer' }],
};


const PipelineBoard = () => {
  const [columns, setColumns] = useState(initialData);
  const [hoverCol, setHoverCol] = useState(null);

  const moveCard = (itemId, fromCol, toCol, clientY) => {
    if (!toCol) return;

    const item = columns[fromCol].find((i) => i.id === itemId);
    const destItems = [...columns[toCol]];

    let insertIndex = destItems.length;

    const cards = document.querySelectorAll(`[data-col="${toCol}"]`);

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      if (clientY < rect.top + rect.height / 2) {
        insertIndex = index;
        return;
      }
    });

    destItems.splice(insertIndex, 0, item);

    setColumns((prev) => ({
      ...prev,
      [fromCol]: prev[fromCol].filter((i) => i.id !== itemId),
      [toCol]: destItems,
    }));
  };

  const handleDrag = (e, data) => {
    const x = data.x + e.target.getBoundingClientRect().left;
    const columnWidth = window.innerWidth / 4;
    const colIndex = Math.floor(x / columnWidth);
    const colKeys = Object.keys(columns);
    setHoverCol(colKeys[colIndex] || null);
  };

  const handleStop = (e, data, itemId, fromCol) => {
    const x = data.x + e.target.getBoundingClientRect().left;
    const columnWidth = window.innerWidth / 4;
    const colIndex = Math.floor(x / columnWidth);
    const colKeys = Object.keys(columns);
    const toCol = colKeys[colIndex];
    moveCard(itemId, fromCol, toCol, e.clientY);
    setHoverCol(null);
  };

  return (
    <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
      {/* Outer scroll container — X and Y with dashboard-scroll styling */}
      <div className="flex-1 min-h-0 overflow-auto dashboard-scroll w-full">
        <div className="flex gap-4 px-4 py-4 pb-6 w-fit">
          {Object.entries(columns).map(([columnId, items]) => (
            <div
              key={columnId}
              className={`w-72 flex-shrink-0 rounded-xl text-white flex flex-col transition-all
                ${hoverCol === columnId ? 'bg-teal-700' : 'bg-black'}`}
            >
              {/* Column header */}
              <div className="flex justify-between items-center px-4 pt-4 pb-3 flex-shrink-0">
                <h2 className="text-lg font-semibold text-teal-300 capitalize">{columnId}</h2>
                <span className="bg-teal-400 text-black text-sm px-2 py-0.5 rounded-full">
                  {items.length}
                </span>
              </div>

              {/* Cards list — Y scroll per column */}
              <div className="overflow-y-auto overflow-x-hidden px-4 pb-4 dashboard-scroll">
                {items.map((item) => (
                  <Draggable
                    key={item.id}
                    onDrag={handleDrag}
                    onStop={(e, data) => handleStop(e, data, item.id, columnId)}
                  >
                    <div
                      data-col={columnId}
                      style={{ position: 'relative', zIndex: 100 }}
                      className="mb-3 cursor-grab active:cursor-grabbing"
                    >
                      <CandidateCard
                        name={item.name}
                        role={item.role}
                        experience={item.experience}
                        status={item.status}
                        time={item.time}
                      />
                    </div>
                  </Draggable>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PipelineBoard;