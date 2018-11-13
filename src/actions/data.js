const data = {
  admins: [
    {
      id: 1,
      name: "Vishal Singhal",
      email: "vishal@wakecap.com",
      password: "password"
    },
    {
      id: 2,
      name: "Hassan",
      email: "hassan@wakecap.com",
      password: "password"
    }
  ],

  workers: [
    {
      manager_id: 1,
      id: "w_1",
      name: "Worker 1",
      designation: "Foreman",
      hours_worked: 1244,
      last_active_zone: "Zone 1",
      asset_id: "#34445",
      tag_id: "#34445",
      monthlyHours: [21, 71.5, 106.4, 12, 44.0, 170, 135.6, 18.5, 216.4, 194.1, 95.6, 54.4],
      supervisor: {
        name: "SP1",
        designation: "Maager"
      },
      helmets: [
        {
          id: "123444",
          assigned_id: "IN-12",
          time: "2 min",
          indicator: "red"
        }
      ]
    },
    {
      manager_id: 1,
      id: "w_2",
      name: "Worker 2",
      designation: "abc",
      hours_worked: 344,
      last_active_zone: "Zone 2",
      asset_id: "#34445",
      tag_id: "#34445",
      monthlyHours: [21, 71.5, 10.4, 12, 144.0, 170, 135.6, 18.5, 216.4, 194.1, 95.6, 54.4],
      supervisor: {
        name: "SP1",
        designation: "Maager"
      },
      helmets: [
        {
          id: "123444",
          assigned_id: "IN-12",
          time: "2 min",
          indicator: "green"
        },
        {
          id: "1234",
          assign_id: "IN-13",
          time: "30 min",
          indicator: "red"
        },
        {
          id: "1234",
          assign_id: "IN-13",
          time: "40 min",
          indicator: "red"
        }
      ]
    },
    {
      manager_id: 1,
      id: "w_3",
      name: "Worker 3",
      designation: "designation",
      hours_worked: 344,
      last_active_zone: "Zone 3",
      asset_id: "#34445",
      tag_id: "#34445",
      monthlyHours: [21, 71.5, 106.4, 12, 144.0, 170, 135.6, 18.5, 216.4, 194.1, 95.6, 54.4],
      supervisor: {
        name: "SP1",
        designation: "Maager"
      },
      helmets: [
        {
          id: "123444",
          assigned_id: "IN-12",
          time: "2 min",
          indicator: "green"
        },
        {
          id: "1234",
          assign_id: "IN-13",
          time: "3 min",
          indicator: "green"
        },
        {
          id: "1234",
          assign_id: "IN-13",
          time: "50 min",
          indicator: "red"
        },
        {
          id: "1234",
          assign_id: "IN-13",
          time: "3 min",
          indicator: "green"
        }
      ]
    },
    {
      manager_id: 1,
      id: "w_4",
      name: "Worker 4",
      designation: "designation",
      hours_worked: 124,
      last_active_zone: "Zone 5",
      asset_id: "#34445",
      tag_id: "#34445",
      monthlyHours: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      supervisor: {
        name: "SP1",
        designation: "Maager"
      },
      helmets: [
        {
          id: "123444",
          assigned_id: "IN-12",
          time: "2 min",
          indicator: "green"
        },
        {
          id: "1234",
          assign_id: "IN-13",
          time: "3 min",
          indicator: "green"
        }
      ]
    }
  ]
}

export default data;
