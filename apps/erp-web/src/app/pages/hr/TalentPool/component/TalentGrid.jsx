  import TalentCard from './TalentCard';

  export default function TalentGrid({ talents, onRemove, onView }) {
    return (
      <div className="grid grid-cols-3 gap-3">
        {talents.map((talent) => (
          <TalentCard 
          key={talent.id} 
          talent={talent} 
          onRemove={onRemove} 
          onView={onView} />
        ))}
      </div>
    );
  }
