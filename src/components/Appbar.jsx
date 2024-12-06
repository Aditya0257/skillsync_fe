export const Appbar = () => {
    return <div className="flex items-center justify-between mb-8">
    <h1 className="text-3xl font-bold">SkillSync</h1>
    <div className="flex items-start justify-start bg-[#181717] rounded-full px-4 py-2">
      <input
        type="text"
        placeholder="Search by topic"
        className="bg-transparent outline-none text-[#EAE7E7] w-64"
      />
      <button>🔍</button>
    </div>
  </div>
}