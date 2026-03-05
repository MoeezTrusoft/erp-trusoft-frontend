import { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import MoveConfirmModal from './MoveConfirmModal';
import ViewCandidateButton from './ViewCandidateButton';
import CandidateDrawer from './CandidateDrawer';

const initialData = {
  applied: [
    { id: '1', name: 'Ayesha Khan', role: 'UI Designer' },
    { id: '2', name: 'Ali Raza', role: 'Frontend Developer' },
    { id: '3', name: 'Moeez Ahmed', role: 'UI Designer' },
    { id: '4', name: 'Hamza', role: 'UI Designer' },
  ],
  screening: [
    { id: '5', name: 'Usman Tariq', role: 'Backend Developer' },
    { id: '9', name: 'Usman Tariq', role: 'Backend Developer' },
  ],
  interview: [
    { id: '6', name: 'Hamza Khan', role: 'Full Stack Developer' },
    { id: '7', name: 'Hamza Ali', role: 'Full Stack Developer' },
    { id: '10', name: 'Hamza Ali', role: 'Full Stack Developer' },
  ],
  offer: [{ id: '8', name: 'Bilal Khan', role: 'DevOps Engineer' }],
  hired: [{ id: '11', name: 'Bilal Khan', role: 'DevOps Engineer' }],
  rejected: [{ id: '12', name: 'Bilal Khan', role: 'DevOps Engineer' }],
};

const PipelineBoard = () => {
  const [columns, setColumns] = useState(initialData);
  const columnRefs = useRef({});
  const [confirmData, setConfirmData] = useState(null);

  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const performMove = (itemId, sourceCol, targetCol, targetIndex) => {
    const sourceItems = [...columns[sourceCol]];
    const itemIndex = sourceItems.findIndex((i) => i.id === itemId);
    const [movedItem] = sourceItems.splice(itemIndex, 1);

    const targetItems = [...columns[targetCol]];

    if (targetIndex !== undefined && targetIndex !== null) {
      targetItems.splice(targetIndex, 0, movedItem);
    } else {
      targetItems.push(movedItem);
    }

    setColumns({
      ...columns,
      [sourceCol]: sourceItems,
      [targetCol]: targetItems,
    });
  };

  const moveCard = (itemId, sourceCol, x, y) => {
    let targetCol = sourceCol;
    let targetIndex = null;

    Object.entries(columnRefs.current).forEach(([colId, ref]) => {
      if (!ref) return;

      const rect = ref.getBoundingClientRect();

      if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        targetCol = colId;

        const cards = Array.from(ref.querySelectorAll('[data-card-id]'));

        for (let i = 0; i < cards.length; i++) {
          const cardRect = cards[i].getBoundingClientRect();

          if (y < cardRect.top + cardRect.height / 2) {
            targetIndex = i;
            break;
          }
        }

        if (targetIndex === null) {
          targetIndex = cards.length;
        }
      }
    });

    if (targetCol === sourceCol && targetIndex === null) return;

    if (targetCol === 'interview' || targetCol === 'rejected') {
      setConfirmData({ itemId, sourceCol, targetCol, targetIndex });
      return;
    }

    performMove(itemId, sourceCol, targetCol, targetIndex);
  };

  const colEntries = Object.entries(columns);
  const lastIndex = colEntries.length - 1;

  return (
    <div
      className="relative h-[calc(100vh-15rem)] p-6 pb-4 overflow-hidden"
      style={{ background: 'var(--color-primary-lightest)' }}
    >
      <div className="flex gap-4 h-full overflow-x-auto pb-2 dashboard-scroll">
        {colEntries.map(([columnId, items], index) => {
          const isLastColumn = index === lastIndex;

          return (
            <div key={columnId} className="flex">
              <div
                ref={(el) => (columnRefs.current[columnId] = el)}
                className="min-w-[320px] flex-shrink-0 rounded-xl p-4 h-full overflow-y-auto"
                style={{
                  backgroundColor: isLastColumn
                    ? 'var(--color-gray-dark)'
                    : 'var(--color-black)',
                  color: isLastColumn
                    ? 'var(--color-gray-light)'
                    : 'var(--color-white)',
                }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h2
                    className="text-lg font-semibold capitalize"
                    style={{
                      color: isLastColumn
                        ? 'var(--color-gray-light)'
                        : 'var(--color-primary-light)',
                    }}
                  >
                    {columnId}
                  </h2>

                  <span
                    className="text-sm px-2 py-0.5 rounded-full"
                    style={{
                      background: isLastColumn
                        ? 'var(--color-gray-light)'
                        : 'var(--color-primary-light)',
                      color: 'var(--color-black)',
                    }}
                  >
                    {items.length}
                  </span>
                </div>

                {items.map((item) => (
                  <Draggable
                    key={item.id}
                    position={{ x: 0, y: 0 }}
                    onStop={(e) =>
                      moveCard(item.id, columnId, e.clientX, e.clientY)
                    }
                  >
                    <div
                      data-card-id={item.id}
                      className="p-3 rounded-lg mb-3 shadow-lg"
                      style={{
                        backgroundColor: isLastColumn
                          ? 'var(--color-gray-light)'
                          : 'var(--color-gray-dark)',
                        outline: '1px solid var(--color-white)',
                        cursor: 'grab',
                      }}
                    >
                      <div className="flex justify-between">
                        <h3
                          style={{
                            color: isLastColumn
                              ? 'var(--color-black)'
                              : 'var(--color-white)',
                          }}
                        >
                          {item.name}
                        </h3>

                        <span
                          className="text-xs px-2 py-0.5 rounded"
                          style={{
                            backgroundColor: isLastColumn
                              ? 'var(--color-status-draft)'
                              : 'var(--color-primary-light)',
                            color: 'var(--color-black)',
                          }}
                        >
                          {columnId}
                        </span>
                      </div>

                      <p className="text-sm">{item.role}</p>
                      <p className="text-xs">3 years of experience</p>

                      <div className="flex justify-between items-center mt-1">
                        <p className="text-xs">2 minutes ago</p>

                        <ViewCandidateButton
                          onClick={() => {
                            setSelectedCandidate(item);
                            setIsDrawerOpen(true);
                          }}
                        />
                      </div>
                    </div>
                  </Draggable>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <MoveConfirmModal
        isOpen={!!confirmData}
        targetCol={confirmData?.targetCol}
        onCancel={() => setConfirmData(null)}
        onConfirm={() => {
          performMove(
            confirmData.itemId,
            confirmData.sourceCol,
            confirmData.targetCol,
            confirmData.targetIndex
          );
          setConfirmData(null);
        }}
      />

      <CandidateDrawer
        isOpen={isDrawerOpen}
        candidate={selectedCandidate}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
};

export default PipelineBoard;