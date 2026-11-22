const MissionsModule = (function () {
  const missions = window._missions = window._missions || {};

  function getMission(mission) {
    return missions[mission] || null;
  }

  function getAllMissions() {
    return Object.keys(missions);
  }

  function getClosedMissionByTag(tag) {
    let closed = 0; let total = 0;
    let title = [];
    for (const id of getAllMissions()) {
      const m = getMission(id);
      if (m.tagged.includes(tag)) {
        if (m.closed) { closed++; title.push(id); }
        total++;
      }
    }

    return { 'closed': closed, 'total': total, 'title': title };
  }

  return {
    getMission,
    getAllMissions,
    getClosedMissionByTag,
  };
})();
