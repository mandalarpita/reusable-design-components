import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TanStackTable from "../Layout/TanStackTable";
import { fetchData } from "../Layout/makeData";

export default function TestTables() {
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        size: 60,
      },
      {
        accessorKey: "firstName",
        cell: (info) => info.getValue(),
        enablePinning: true,
      },
      {
        accessorFn: (row) => row.lastName,
        id: "lastName",
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
      },
      {
        accessorKey: "age",
        header: () => "Age",
        cell: (age) => <div className="chip">{age.getValue()}</div>,
        size: 50,
      },
      {
        accessorKey: "visits",
        header: () => <span>Visits</span>,
        size: 50,
      },
      {
        accessorKey: "status",
        header: "Status",
      },
      {
        accessorKey: "progress",
        header: "Profile Progress",
        size: 80,
      },
      {
        accessorKey: "createdAt",
        header: "Created At",
        cell: (info) => info.getValue().toLocaleString(),
      },
    ],
    []
  );
  const [pageData, setPageData] = useState([]);
  // const getPageData = (page, start, fetchSize, sorting) => {
  //   if (page === 0) {
  //     setPageData({
  //       data: [
  //         {
  //           id: 1,
  //           firstName: "Telly",
  //           lastName: "Murphy",
  //           age: 39,
  //           visits: 331,
  //           progress: 93,
  //           createdAt: "2022-03-20T08:48:06.943Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 2,
  //           firstName: "Gladyce",
  //           lastName: "Blick",
  //           age: 6,
  //           visits: 731,
  //           progress: 57,
  //           createdAt: "2001-06-21T17:31:15.223Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 3,
  //           firstName: "Haven",
  //           lastName: "Fahey",
  //           age: 33,
  //           visits: 110,
  //           progress: 65,
  //           createdAt: "2016-12-18T22:45:31.252Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 4,
  //           firstName: "Zachery",
  //           lastName: "Cremin",
  //           age: 13,
  //           visits: 975,
  //           progress: 56,
  //           createdAt: "2002-06-24T12:22:31.081Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 5,
  //           firstName: "Jackeline",
  //           lastName: "Marvin",
  //           age: 33,
  //           visits: 339,
  //           progress: 55,
  //           createdAt: "1999-11-21T23:33:28.644Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 6,
  //           firstName: "Montana",
  //           lastName: "Auer",
  //           age: 39,
  //           visits: 943,
  //           progress: 69,
  //           createdAt: "2002-04-18T15:34:57.154Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 7,
  //           firstName: "Arturo",
  //           lastName: "Wehner",
  //           age: 35,
  //           visits: 96,
  //           progress: 44,
  //           createdAt: "2021-12-19T14:03:47.487Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 8,
  //           firstName: "Devonte",
  //           lastName: "Crona",
  //           age: 6,
  //           visits: 399,
  //           progress: 56,
  //           createdAt: "1995-02-22T22:32:45.695Z",
  //           status: "single",
  //         },
  //         {
  //           id: 9,
  //           firstName: "Violette",
  //           lastName: "Considine",
  //           age: 11,
  //           visits: 152,
  //           progress: 3,
  //           createdAt: "2005-07-25T00:35:54.461Z",
  //           status: "single",
  //         },
  //         {
  //           id: 10,
  //           firstName: "Zakary",
  //           lastName: "Fritsch",
  //           age: 3,
  //           visits: 428,
  //           progress: 81,
  //           createdAt: "1999-01-18T20:47:35.746Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 11,
  //           firstName: "Margie",
  //           lastName: "Toy",
  //           age: 14,
  //           visits: 300,
  //           progress: 94,
  //           createdAt: "2005-06-23T14:36:13.771Z",
  //           status: "single",
  //         },
  //         {
  //           id: 12,
  //           firstName: "Isidro",
  //           lastName: "Barton",
  //           age: 21,
  //           visits: 197,
  //           progress: 80,
  //           createdAt: "2017-02-10T14:34:23.214Z",
  //           status: "single",
  //         },
  //         {
  //           id: 13,
  //           firstName: "Marge",
  //           lastName: "Pfannerstill",
  //           age: 11,
  //           visits: 578,
  //           progress: 91,
  //           createdAt: "2001-05-02T03:15:18.406Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 14,
  //           firstName: "Zora",
  //           lastName: "Gulgowski",
  //           age: 23,
  //           visits: 211,
  //           progress: 26,
  //           createdAt: "2001-07-16T18:55:56.898Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 15,
  //           firstName: "Hortense",
  //           lastName: "Green",
  //           age: 16,
  //           visits: 174,
  //           progress: 34,
  //           createdAt: "2011-06-10T23:37:24.254Z",
  //           status: "single",
  //         },
  //         {
  //           id: 16,
  //           firstName: "Alanna",
  //           lastName: "Vandervort",
  //           age: 22,
  //           visits: 161,
  //           progress: 57,
  //           createdAt: "2016-07-19T08:31:24.210Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 17,
  //           firstName: "Rodrigo",
  //           lastName: "Rempel",
  //           age: 9,
  //           visits: 253,
  //           progress: 18,
  //           createdAt: "1993-01-27T18:53:48.703Z",
  //           status: "single",
  //         },
  //         {
  //           id: 18,
  //           firstName: "Nickolas",
  //           lastName: "Mohr",
  //           age: 16,
  //           visits: 446,
  //           progress: 5,
  //           createdAt: "1996-09-21T08:05:46.819Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 19,
  //           firstName: "Erna",
  //           lastName: "Kutch",
  //           age: 22,
  //           visits: 599,
  //           progress: 5,
  //           createdAt: "2009-03-24T14:08:49.932Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 20,
  //           firstName: "Trinity",
  //           lastName: "Stehr",
  //           age: 30,
  //           visits: 16,
  //           progress: 44,
  //           createdAt: "2014-04-20T20:09:08.609Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 21,
  //           firstName: "Ernesto",
  //           lastName: "Upton",
  //           age: 2,
  //           visits: 240,
  //           progress: 7,
  //           createdAt: "2021-09-14T02:54:38.846Z",
  //           status: "single",
  //         },
  //         {
  //           id: 22,
  //           firstName: "Armando",
  //           lastName: "Schneider",
  //           age: 12,
  //           visits: 110,
  //           progress: 22,
  //           createdAt: "2016-06-28T20:24:29.648Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 23,
  //           firstName: "Jazlyn",
  //           lastName: "Effertz",
  //           age: 7,
  //           visits: 698,
  //           progress: 5,
  //           createdAt: "2018-03-23T21:56:20.944Z",
  //           status: "single",
  //         },
  //         {
  //           id: 24,
  //           firstName: "Dedrick",
  //           lastName: "Sipes",
  //           age: 29,
  //           visits: 463,
  //           progress: 38,
  //           createdAt: "2020-01-26T10:05:39.967Z",
  //           status: "single",
  //         },
  //         {
  //           id: 25,
  //           firstName: "Alfonso",
  //           lastName: "Moore",
  //           age: 20,
  //           visits: 378,
  //           progress: 41,
  //           createdAt: "2000-04-21T10:04:58.649Z",
  //           status: "single",
  //         },
  //         ,
  //         {
  //           id: 1,
  //           firstName: "Telly",
  //           lastName: "Murphy",
  //           age: 39,
  //           visits: 331,
  //           progress: 93,
  //           createdAt: "2022-03-20T08:48:06.943Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 2,
  //           firstName: "Gladyce",
  //           lastName: "Blick",
  //           age: 6,
  //           visits: 731,
  //           progress: 57,
  //           createdAt: "2001-06-21T17:31:15.223Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 3,
  //           firstName: "Haven",
  //           lastName: "Fahey",
  //           age: 33,
  //           visits: 110,
  //           progress: 65,
  //           createdAt: "2016-12-18T22:45:31.252Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 4,
  //           firstName: "Zachery",
  //           lastName: "Cremin",
  //           age: 13,
  //           visits: 975,
  //           progress: 56,
  //           createdAt: "2002-06-24T12:22:31.081Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 5,
  //           firstName: "Jackeline",
  //           lastName: "Marvin",
  //           age: 33,
  //           visits: 339,
  //           progress: 55,
  //           createdAt: "1999-11-21T23:33:28.644Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 6,
  //           firstName: "Montana",
  //           lastName: "Auer",
  //           age: 39,
  //           visits: 943,
  //           progress: 69,
  //           createdAt: "2002-04-18T15:34:57.154Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 7,
  //           firstName: "Arturo",
  //           lastName: "Wehner",
  //           age: 35,
  //           visits: 96,
  //           progress: 44,
  //           createdAt: "2021-12-19T14:03:47.487Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 8,
  //           firstName: "Devonte",
  //           lastName: "Crona",
  //           age: 6,
  //           visits: 399,
  //           progress: 56,
  //           createdAt: "1995-02-22T22:32:45.695Z",
  //           status: "single",
  //         },
  //         {
  //           id: 9,
  //           firstName: "Violette",
  //           lastName: "Considine",
  //           age: 11,
  //           visits: 152,
  //           progress: 3,
  //           createdAt: "2005-07-25T00:35:54.461Z",
  //           status: "single",
  //         },
  //         {
  //           id: 10,
  //           firstName: "Zakary",
  //           lastName: "Fritsch",
  //           age: 3,
  //           visits: 428,
  //           progress: 81,
  //           createdAt: "1999-01-18T20:47:35.746Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 11,
  //           firstName: "Margie",
  //           lastName: "Toy",
  //           age: 14,
  //           visits: 300,
  //           progress: 94,
  //           createdAt: "2005-06-23T14:36:13.771Z",
  //           status: "single",
  //         },
  //         {
  //           id: 12,
  //           firstName: "Isidro",
  //           lastName: "Barton",
  //           age: 21,
  //           visits: 197,
  //           progress: 80,
  //           createdAt: "2017-02-10T14:34:23.214Z",
  //           status: "single",
  //         },
  //         {
  //           id: 13,
  //           firstName: "Marge",
  //           lastName: "Pfannerstill",
  //           age: 11,
  //           visits: 578,
  //           progress: 91,
  //           createdAt: "2001-05-02T03:15:18.406Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 14,
  //           firstName: "Zora",
  //           lastName: "Gulgowski",
  //           age: 23,
  //           visits: 211,
  //           progress: 26,
  //           createdAt: "2001-07-16T18:55:56.898Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 15,
  //           firstName: "Hortense",
  //           lastName: "Green",
  //           age: 16,
  //           visits: 174,
  //           progress: 34,
  //           createdAt: "2011-06-10T23:37:24.254Z",
  //           status: "single",
  //         },
  //         {
  //           id: 16,
  //           firstName: "Alanna",
  //           lastName: "Vandervort",
  //           age: 22,
  //           visits: 161,
  //           progress: 57,
  //           createdAt: "2016-07-19T08:31:24.210Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 17,
  //           firstName: "Rodrigo",
  //           lastName: "Rempel",
  //           age: 9,
  //           visits: 253,
  //           progress: 18,
  //           createdAt: "1993-01-27T18:53:48.703Z",
  //           status: "single",
  //         },
  //         {
  //           id: 18,
  //           firstName: "Nickolas",
  //           lastName: "Mohr",
  //           age: 16,
  //           visits: 446,
  //           progress: 5,
  //           createdAt: "1996-09-21T08:05:46.819Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 19,
  //           firstName: "Erna",
  //           lastName: "Kutch",
  //           age: 22,
  //           visits: 599,
  //           progress: 5,
  //           createdAt: "2009-03-24T14:08:49.932Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 20,
  //           firstName: "Trinity",
  //           lastName: "Stehr",
  //           age: 30,
  //           visits: 16,
  //           progress: 44,
  //           createdAt: "2014-04-20T20:09:08.609Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 21,
  //           firstName: "Ernesto",
  //           lastName: "Upton",
  //           age: 2,
  //           visits: 240,
  //           progress: 7,
  //           createdAt: "2021-09-14T02:54:38.846Z",
  //           status: "single",
  //         },
  //         {
  //           id: 22,
  //           firstName: "Armando",
  //           lastName: "Schneider",
  //           age: 12,
  //           visits: 110,
  //           progress: 22,
  //           createdAt: "2016-06-28T20:24:29.648Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 23,
  //           firstName: "Jazlyn",
  //           lastName: "Effertz",
  //           age: 7,
  //           visits: 698,
  //           progress: 5,
  //           createdAt: "2018-03-23T21:56:20.944Z",
  //           status: "single",
  //         },
  //         {
  //           id: 24,
  //           firstName: "Dedrick",
  //           lastName: "Sipes",
  //           age: 29,
  //           visits: 463,
  //           progress: 38,
  //           createdAt: "2020-01-26T10:05:39.967Z",
  //           status: "single",
  //         },
  //         {
  //           id: 25,
  //           firstName: "Alfonso",
  //           lastName: "Moore",
  //           age: 20,
  //           visits: 378,
  //           progress: 41,
  //           createdAt: "2000-04-21T10:04:58.649Z",
  //           status: "single",
  //         },
  //       ],
  //       meta: {
  //         totalRowCount: 1000,
  //       },
  //     });
  //   } else {
  //     return setPageData(fetchData(start, fetchSize, sorting));
  //   }
  // };
  const getPageData = (page, start, fetchSize, sorting) => {
    if (page === 0) {
      return {
        data: [
          {
            id: 1,
            firstName: "Telly",
            lastName: "Murphy",
            age: 39,
            visits: 331,
            progress: 93,
            createdAt: "2022-03-20T08:48:06.943Z",
            status: "relationship",
          },
          {
            id: 2,
            firstName: "Gladyce",
            lastName: "Blick",
            age: 6,
            visits: 731,
            progress: 57,
            createdAt: "2001-06-21T17:31:15.223Z",
            status: "relationship",
          },
          {
            id: 3,
            firstName: "Haven",
            lastName: "Fahey",
            age: 33,
            visits: 110,
            progress: 65,
            createdAt: "2016-12-18T22:45:31.252Z",
            status: "relationship",
          },
          {
            id: 4,
            firstName: "Zachery",
            lastName: "Cremin",
            age: 13,
            visits: 975,
            progress: 56,
            createdAt: "2002-06-24T12:22:31.081Z",
            status: "complicated",
          },
          {
            id: 5,
            firstName: "Jackeline",
            lastName: "Marvin",
            age: 33,
            visits: 339,
            progress: 55,
            createdAt: "1999-11-21T23:33:28.644Z",
            status: "relationship",
          },
          {
            id: 6,
            firstName: "Montana",
            lastName: "Auer",
            age: 39,
            visits: 943,
            progress: 69,
            createdAt: "2002-04-18T15:34:57.154Z",
            status: "relationship",
          },
          {
            id: 7,
            firstName: "Arturo",
            lastName: "Wehner",
            age: 35,
            visits: 96,
            progress: 44,
            createdAt: "2021-12-19T14:03:47.487Z",
            status: "complicated",
          },
          {
            id: 8,
            firstName: "Devonte",
            lastName: "Crona",
            age: 6,
            visits: 399,
            progress: 56,
            createdAt: "1995-02-22T22:32:45.695Z",
            status: "single",
          },
          {
            id: 9,
            firstName: "Violette",
            lastName: "Considine",
            age: 11,
            visits: 152,
            progress: 3,
            createdAt: "2005-07-25T00:35:54.461Z",
            status: "single",
          },
          {
            id: 10,
            firstName: "Zakary",
            lastName: "Fritsch",
            age: 3,
            visits: 428,
            progress: 81,
            createdAt: "1999-01-18T20:47:35.746Z",
            status: "complicated",
          },
          {
            id: 11,
            firstName: "Margie",
            lastName: "Toy",
            age: 14,
            visits: 300,
            progress: 94,
            createdAt: "2005-06-23T14:36:13.771Z",
            status: "single",
          },
          {
            id: 12,
            firstName: "Isidro",
            lastName: "Barton",
            age: 21,
            visits: 197,
            progress: 80,
            createdAt: "2017-02-10T14:34:23.214Z",
            status: "single",
          },
          {
            id: 13,
            firstName: "Marge",
            lastName: "Pfannerstill",
            age: 11,
            visits: 578,
            progress: 91,
            createdAt: "2001-05-02T03:15:18.406Z",
            status: "complicated",
          },
          {
            id: 14,
            firstName: "Zora",
            lastName: "Gulgowski",
            age: 23,
            visits: 211,
            progress: 26,
            createdAt: "2001-07-16T18:55:56.898Z",
            status: "complicated",
          },
          {
            id: 15,
            firstName: "Hortense",
            lastName: "Green",
            age: 16,
            visits: 174,
            progress: 34,
            createdAt: "2011-06-10T23:37:24.254Z",
            status: "single",
          },
          {
            id: 16,
            firstName: "Alanna",
            lastName: "Vandervort",
            age: 22,
            visits: 161,
            progress: 57,
            createdAt: "2016-07-19T08:31:24.210Z",
            status: "relationship",
          },
          {
            id: 17,
            firstName: "Rodrigo",
            lastName: "Rempel",
            age: 9,
            visits: 253,
            progress: 18,
            createdAt: "1993-01-27T18:53:48.703Z",
            status: "single",
          },
          {
            id: 18,
            firstName: "Nickolas",
            lastName: "Mohr",
            age: 16,
            visits: 446,
            progress: 5,
            createdAt: "1996-09-21T08:05:46.819Z",
            status: "complicated",
          },
          {
            id: 19,
            firstName: "Erna",
            lastName: "Kutch",
            age: 22,
            visits: 599,
            progress: 5,
            createdAt: "2009-03-24T14:08:49.932Z",
            status: "complicated",
          },
          {
            id: 20,
            firstName: "Trinity",
            lastName: "Stehr",
            age: 30,
            visits: 16,
            progress: 44,
            createdAt: "2014-04-20T20:09:08.609Z",
            status: "relationship",
          },
          {
            id: 21,
            firstName: "Ernesto",
            lastName: "Upton",
            age: 2,
            visits: 240,
            progress: 7,
            createdAt: "2021-09-14T02:54:38.846Z",
            status: "single",
          },
          {
            id: 22,
            firstName: "Armando",
            lastName: "Schneider",
            age: 12,
            visits: 110,
            progress: 22,
            createdAt: "2016-06-28T20:24:29.648Z",
            status: "complicated",
          },
          {
            id: 23,
            firstName: "Jazlyn",
            lastName: "Effertz",
            age: 7,
            visits: 698,
            progress: 5,
            createdAt: "2018-03-23T21:56:20.944Z",
            status: "single",
          },
          {
            id: 24,
            firstName: "Dedrick",
            lastName: "Sipes",
            age: 29,
            visits: 463,
            progress: 38,
            createdAt: "2020-01-26T10:05:39.967Z",
            status: "single",
          },
          {
            id: 25,
            firstName: "Alfonso",
            lastName: "Moore",
            age: 20,
            visits: 378,
            progress: 41,
            createdAt: "2000-04-21T10:04:58.649Z",
            status: "single",
          },
          ,
          {
            id: 1,
            firstName: "Telly",
            lastName: "Murphy",
            age: 39,
            visits: 331,
            progress: 93,
            createdAt: "2022-03-20T08:48:06.943Z",
            status: "relationship",
          },
          {
            id: 2,
            firstName: "Gladyce",
            lastName: "Blick",
            age: 6,
            visits: 731,
            progress: 57,
            createdAt: "2001-06-21T17:31:15.223Z",
            status: "relationship",
          },
          {
            id: 3,
            firstName: "Haven",
            lastName: "Fahey",
            age: 33,
            visits: 110,
            progress: 65,
            createdAt: "2016-12-18T22:45:31.252Z",
            status: "relationship",
          },
          {
            id: 4,
            firstName: "Zachery",
            lastName: "Cremin",
            age: 13,
            visits: 975,
            progress: 56,
            createdAt: "2002-06-24T12:22:31.081Z",
            status: "complicated",
          },
          {
            id: 5,
            firstName: "Jackeline",
            lastName: "Marvin",
            age: 33,
            visits: 339,
            progress: 55,
            createdAt: "1999-11-21T23:33:28.644Z",
            status: "relationship",
          },
          {
            id: 6,
            firstName: "Montana",
            lastName: "Auer",
            age: 39,
            visits: 943,
            progress: 69,
            createdAt: "2002-04-18T15:34:57.154Z",
            status: "relationship",
          },
          {
            id: 7,
            firstName: "Arturo",
            lastName: "Wehner",
            age: 35,
            visits: 96,
            progress: 44,
            createdAt: "2021-12-19T14:03:47.487Z",
            status: "complicated",
          },
          {
            id: 8,
            firstName: "Devonte",
            lastName: "Crona",
            age: 6,
            visits: 399,
            progress: 56,
            createdAt: "1995-02-22T22:32:45.695Z",
            status: "single",
          },
          {
            id: 9,
            firstName: "Violette",
            lastName: "Considine",
            age: 11,
            visits: 152,
            progress: 3,
            createdAt: "2005-07-25T00:35:54.461Z",
            status: "single",
          },
          {
            id: 10,
            firstName: "Zakary",
            lastName: "Fritsch",
            age: 3,
            visits: 428,
            progress: 81,
            createdAt: "1999-01-18T20:47:35.746Z",
            status: "complicated",
          },
          {
            id: 11,
            firstName: "Margie",
            lastName: "Toy",
            age: 14,
            visits: 300,
            progress: 94,
            createdAt: "2005-06-23T14:36:13.771Z",
            status: "single",
          },
          {
            id: 12,
            firstName: "Isidro",
            lastName: "Barton",
            age: 21,
            visits: 197,
            progress: 80,
            createdAt: "2017-02-10T14:34:23.214Z",
            status: "single",
          },
          {
            id: 13,
            firstName: "Marge",
            lastName: "Pfannerstill",
            age: 11,
            visits: 578,
            progress: 91,
            createdAt: "2001-05-02T03:15:18.406Z",
            status: "complicated",
          },
          {
            id: 14,
            firstName: "Zora",
            lastName: "Gulgowski",
            age: 23,
            visits: 211,
            progress: 26,
            createdAt: "2001-07-16T18:55:56.898Z",
            status: "complicated",
          },
          {
            id: 15,
            firstName: "Hortense",
            lastName: "Green",
            age: 16,
            visits: 174,
            progress: 34,
            createdAt: "2011-06-10T23:37:24.254Z",
            status: "single",
          },
          {
            id: 16,
            firstName: "Alanna",
            lastName: "Vandervort",
            age: 22,
            visits: 161,
            progress: 57,
            createdAt: "2016-07-19T08:31:24.210Z",
            status: "relationship",
          },
          {
            id: 17,
            firstName: "Rodrigo",
            lastName: "Rempel",
            age: 9,
            visits: 253,
            progress: 18,
            createdAt: "1993-01-27T18:53:48.703Z",
            status: "single",
          },
          {
            id: 18,
            firstName: "Nickolas",
            lastName: "Mohr",
            age: 16,
            visits: 446,
            progress: 5,
            createdAt: "1996-09-21T08:05:46.819Z",
            status: "complicated",
          },
          {
            id: 19,
            firstName: "Erna",
            lastName: "Kutch",
            age: 22,
            visits: 599,
            progress: 5,
            createdAt: "2009-03-24T14:08:49.932Z",
            status: "complicated",
          },
          {
            id: 20,
            firstName: "Trinity",
            lastName: "Stehr",
            age: 30,
            visits: 16,
            progress: 44,
            createdAt: "2014-04-20T20:09:08.609Z",
            status: "relationship",
          },
          {
            id: 21,
            firstName: "Ernesto",
            lastName: "Upton",
            age: 2,
            visits: 240,
            progress: 7,
            createdAt: "2021-09-14T02:54:38.846Z",
            status: "single",
          },
          {
            id: 22,
            firstName: "Armando",
            lastName: "Schneider",
            age: 12,
            visits: 110,
            progress: 22,
            createdAt: "2016-06-28T20:24:29.648Z",
            status: "complicated",
          },
          {
            id: 23,
            firstName: "Jazlyn",
            lastName: "Effertz",
            age: 7,
            visits: 698,
            progress: 5,
            createdAt: "2018-03-23T21:56:20.944Z",
            status: "single",
          },
          {
            id: 24,
            firstName: "Dedrick",
            lastName: "Sipes",
            age: 29,
            visits: 463,
            progress: 38,
            createdAt: "2020-01-26T10:05:39.967Z",
            status: "single",
          },
          {
            id: 25,
            firstName: "Alfonso",
            lastName: "Moore",
            age: 20,
            visits: 378,
            progress: 41,
            createdAt: "2000-04-21T10:04:58.649Z",
            status: "single",
          },
        ],
        meta: {
          totalRowCount: 1000,
        },
      };
    } else {
      return fetchData(start, fetchSize, sorting);
    }
  };
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [globalFilterApi, setGlobalFilterApi] = React.useState("");

  const enableMultiSelect = true;
  return (
    <>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <div>
            {/* <DebouncedInput value={globalFilter ?? ""} onChange={(value) => setGlobalFilter(String(value))} className="p-2 font-lg shadow border border-block" placeholder="Search all columns..." /> */}
            <DebouncedInput
              value={globalFilterApi ?? ""}
              onChange={(value, e) => {
                if (value) {
                  setGlobalFilterApi(String(value));
                  //add api
                  setPageData({
                    data: [
                      {
                        id: 1,
                        firstName: "Telly NEW",
                        lastName: "Murphy",
                        age: 39,
                        visits: 331,
                        progress: 93,
                        createdAt: "2022-03-20T08:48:06.943Z",
                        status: "relationship",
                      },
                    ],
                    meta: {
                      totalRowCount: 1000,
                    },
                  });
                }
              }}
              className="p-2 font-lg shadow border border-block"
              placeholder="Search all columns..."
            />
          </div>
          <TanStackTable columns={columns} getPageData={getPageData} pageData={pageData} enableMultiSelect={enableMultiSelect} fetchSize={50} globalFilter={globalFilterApi} setGlobalFilter={setGlobalFilter} />
        </Grid>
      </Grid>
    </>
  );
}

function DebouncedInput({ value: initialValue, onChange, debounce = 500, ...props }) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return <input {...props} value={value} onChange={(e) => setValue(e.target.value)} />;
}
