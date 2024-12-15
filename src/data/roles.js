const roles = [
  {
    id: "1",
    name: "Superadmin",
    type: "DEFAULT",
    dateCreated: "Jan 1, 2023",
    status: "Active",
    users: Array(5).fill({
      id: "1",
      name: "User",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces",
    }),
  },
  {
    id: "2",
    name: "Merchantadmin",
    type: "DEFAULT",
    dateCreated: "Feb 1, 2023",
    status: "Active",
    users: Array(4).fill({
      id: "2",
      name: "User",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
    }),
  },
  {
    id: "3",
    name: "Supportadmin",
    type: "DEFAULT",
    dateCreated: "Feb 1, 2023",
    status: "Active",
    users: Array(3).fill({
      id: "3",
      name: "User",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64&h=64&fit=crop&crop=faces",
    }),
  },
  {
    id: "4",
    name: "Sales personnel",
    type: "CUSTOM",
    dateCreated: "Mar 1, 2023",
    status: "Active",
    users: Array(3).fill({
      id: "4",
      name: "User",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=faces",
    }),
  },
  {
    id: "5",
    name: "Deputy sales personnel",
    type: "CUSTOM",
    dateCreated: "Apr 1, 2023",
    status: "Inactive",
    users: Array(4).fill({
      id: "5",
      name: "User",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=faces",
    }),
  },
  {
    id: "6",
    name: "Developeradmin",
    type: "SYSTEM-CUSTOM",
    dateCreated: "May 1, 2023",
    status: "Active",
    users: Array(4).fill({
      id: "6",
      name: "User",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=faces",
    }),
  },
];

module.exports = { roles };
