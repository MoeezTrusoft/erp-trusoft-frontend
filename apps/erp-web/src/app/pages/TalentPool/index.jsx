import { useState } from 'react';
import Breadcrumb from './component/Breadcrumb';
import SearchBar from './component/SearchBar';
import FilterButton from './component/FilterButton';
import TalentGrid from './component/TalentGrid';
import CardsSection from './component/CardsSection';
import RemoveCardModal from './component/RemoveCardModal';
import ProfileDetailModal from './component/ProfileDetailModal';

const initialTalents = [
  {
    id: 1,
    name: 'Ayesha Khan',
    role: 'UI Designer',
    experience: '3 Years',
    location: 'Karachi',
    skills: ['Figma', 'UX', 'Prototyping'],
  },
  {
    id: 2,
    name: 'Ali Raza',
    role: 'Frontend Developer',
    experience: '2 Years',
    location: 'Lahore',
    skills: ['React', 'JavaScript', 'Tailwind'],
  },
  {
    id: 3,
    name: 'Sara Ahmed',
    role: 'Backend Developer',
    experience: '4 Years',
    location: 'Islamabad',
    skills: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 4,
    name: 'Ayesha Khan',
    role: 'UI Designer',
    experience: '3 Years',
    location: 'Karachi',
    skills: ['Figma', 'UX', 'Prototyping'],
  },
  {
    id: 5,
    name: 'Ali Raza',
    role: 'Frontend Developer',
    experience: '2 Years',
    location: 'Lahore',
    skills: ['React', 'JavaScript', 'Tailwind'],
  },
  {
    id: 6,
    name: 'Sara Ahmed',
    role: 'Backend Developer',
    experience: '4 Years',
    location: 'Islamabad',
    skills: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 7,
    name: 'Ayesha Khan',
    role: 'UI Designer',
    experience: '3 Years',
    location: 'Karachi',
    skills: ['Figma', 'UX', 'Prototyping'],
  },
  {
    id: 8,
    name: 'Ali Raza',
    role: 'Frontend Developer',
    experience: '2 Years',
    location: 'Lahore',
    skills: ['React', 'JavaScript', 'Tailwind'],
  },
  {
    id: 9,
    name: 'Sara Ahmed',
    role: 'Backend Developer',
    experience: '4 Years',
    location: 'Islamabad',
    skills: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 10,
    name: 'Ayesha Khan',
    role: 'UI Designer',
    experience: '3 Years',
    location: 'Karachi',
    skills: ['Figma', 'UX', 'Prototyping'],
  },
  {
    id: 11,
    name: 'Ali Raza',
    role: 'Frontend Developer',
    experience: '2 Years',
    location: 'Lahore',
    skills: ['React', 'JavaScript', 'Tailwind'],
  },
  {
    id: 12,
    name: 'Sara Ahmed',
    role: 'Backend Developer',
    experience: '4 Years',
    location: 'Islamabad',
    skills: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 13,
    name: 'Ayesha Khan',
    role: 'UI Designer',
    experience: '3 Years',
    location: 'Karachi',
    skills: ['Figma', 'UX', 'Prototyping'],
  },
  {
    id: 14,
    name: 'Ali Raza',
    role: 'Frontend Developer',
    experience: '2 Years',
    location: 'Lahore',
    skills: ['React', 'JavaScript', 'Tailwind'],
  },
  {
    id: 15  ,
    name: 'Sara Ahmed',
    role: 'Backend Developer',
    experience: '4 Years',
    location: 'Islamabad',
    skills: ['Node.js', 'Express', 'MongoDB'],
  },
];

export default function TalentPool() {
  const [talents, setTalents] = useState(initialTalents);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTalent, setSelectedTalent] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const filtered = talents.filter((t) =>
    t.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRemoveClick = (talent) => {
    setSelectedTalent(talent);
    setIsModalOpen(true);
  };

  const handleConfirmRemove = () => {
    setTalents((prev) =>
      prev.filter((t) => t.id !== selectedTalent.id)
    );
    setIsModalOpen(false);
  };

  // ✅ FIX ADDED (THIS WAS MISSING)
  const handleViewClick = (talent) => {
  console.log("SETTING PROFILE OPEN", talent);
  setSelectedTalent(talent);
  setIsProfileOpen(true);
};

  return (
    <div className="h-screen flex flex-col relative overflow-hidden">
      <div className="border-b border-gray-200 mb-4">
        <Breadcrumb />
      </div>

      <div className="flex-1 flex flex-col">
        <div
          className="px-6 py-4 rounded-t-lg flex-shrink-0"
          style={{ backgroundColor: 'var(--color-primary-medium)' }}
        >
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
              />
            </div>
            <FilterButton label="Filter & Sort" />
          </div>
        </div>

        <CardsSection>
          <TalentGrid
            talents={filtered}
            onRemove={handleRemoveClick}
            onView={handleViewClick}
          />
        </CardsSection>
      </div>

      <RemoveCardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmRemove}
      />

      {/* ✅ talent prop pass kiya */}
      <ProfileDetailModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        talent={selectedTalent}
      />
    </div>
  );
}