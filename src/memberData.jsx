var members = [
  { key: 1, name: "Aarya", applied: true },
];

const announcements = []; // Stores announcements
const nightSlipDetails = []; // Stores Night Slip applications

function addMember(newMember) {
  var newEntry = {
    name: newMember.name,
    key: members.length + 1,
    applied: false,
  };
  members.push(newEntry);
}

function addAnnouncement(text) {
  announcements.push(text); // Adds announcements from Secretary
  console.log("New announcement added:", text);
}

function addNightSlipDetails(details) {
  nightSlipDetails.push(details); // Adds Night Slip details
  console.log("New night slip details added:", details);
}

function markAsApplied(memberName) {
  for (let i = 0; i < members.length; i++) {
    if (members[i].name === memberName) {
      members[i].applied = true;
      break;
    }
  }
}

function getNightSlipDetails() {
  return nightSlipDetails; 
}

// ✅ Use Named Exports Only
export { members, announcements, nightSlipDetails, addMember, addAnnouncement, addNightSlipDetails, markAsApplied, getNightSlipDetails };

