const members = [{ key: 1, name: "Aarya", applied: true }];
const announcements = [];
const nightSlipDetails = [];

export function addMember(newMember) {
  members.push({ name: newMember.name, key: members.length + 1, applied: false });
}

export function addAnnouncement(text) {
  announcements.push({
    id: Date.now(),
    text: text,
    timestamp: new Date().toLocaleString()
  });
}

export function getAnnouncements() {
  return announcements.slice();
}

export function addNightSlip(details) {
  nightSlipDetails.push(Object.assign({}, details, { id: Date.now() }));
}

export function markAsApplied(memberName) {
  var member = members.find(function(m) {
    return m.name === memberName;
  });
  if (member) {
    member.applied = true;
  }
}

export function getNightSlipDetails() {
  return nightSlipDetails.slice();
}

export function getMembers() {
  return members.slice();
}
