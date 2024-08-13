import React from "react";

function DashboardCard07() {
  // Dummy data for demonstration
  const users = [
    { id: 1, name: "User1", action: "Login" },
    { id: 2, name: "User2", action: "Logout" },
    { id: 3, name: "User3", action: "Create Document" },
    { id: 4, name: "User4", action: "Edit Profile" },
    { id: 5, name: "User5", action: "Delete File" },
    { id: 6, name: "User6", action: "Share Document" },
    { id: 7, name: "User7", action: "Download Report" },
    { id: 8, name: "User8", action: "Upload Image" },
    { id: 9, name: "User9", action: "Change Password" },
    { id: 10, name: "User10", action: "Send Message" },
  ];

  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Recent Users
        </h2>
      </header>
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-slate-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="p-2">
                    <div className="flex items-center">
                      <div className="text-slate-800 dark:text-slate-100">
                        {user.name}
                      </div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{user.action}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
