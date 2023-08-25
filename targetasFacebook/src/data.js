const data = [
    {
        id: 1,
        name: 'Luis Enriquez',
        born: new Date(2004, 12, 30),
        friends: [3, 5, 6, 10, 39, 75],
        isFriend: true,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 2,
        name: 'Juan Rodriguez',
        born: new Date(1990, 8, 12),
        friends: [9, 10, 15, 20, 21],
        isFriend: false,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 3,
        name: 'Diana Martinez',
        born: new Date(1985, 4, 5),
        friends: [1, 4, 8, 25, 30, 40],
        isFriend: false,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 4,
        name: 'Mario Gonzalez',
        born: new Date(1999, 1, 18),
        friends: [2, 7, 12, 28],
        isFriend: true,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 5,
        name: 'Carla Perez',
        born: new Date(1978, 11, 7),
        friends: [11, 16, 18, 22, 27],
        isFriend: false,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 6,
        name: 'Laura Hernandez',
        born: new Date(1988, 6, 30),
        friends: [7, 9, 14, 26],
        isFriend: true,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 7,
        name: 'Miguel Torres',
        born: new Date(2001, 2, 15),
        friends: [1, 3, 10, 23, 35],
        isFriend: false,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 8,
        name: 'Julia Ramirez',
        born: new Date(1995, 9, 25),
        friends: [5, 13, 20],
        isFriend: true,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 9,
        name: 'Pedro Lopez',
        born: new Date(1982, 11, 10),
        friends: [2, 4, 6, 18, 29],
        isFriend: false,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 10,
        name: 'Sofia Fernandez',
        born: new Date(2006, 7, 5),
        friends: [8, 15, 21, 30, 40],
        isFriend: false,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 11,
        name: 'Ricardo Martinez',
        born: new Date(1993, 5, 22),
        friends: [9, 14, 19, 23, 36],
        isFriend: true,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 12,
        name: 'Elena Torres',
        born: new Date(1979, 1, 14),
        friends: [1, 5, 11, 27],
        isFriend: false,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 13,
        name: 'Hector Soto',
        born: new Date(1987, 10, 3),
        friends: [3, 6, 8, 24, 28],
        isFriend: true,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 14,
        name: 'Laura Perez',
        born: new Date(2000, 3, 9),
        friends: [2, 7, 12, 25, 39],
        isFriend: false,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 15,
        name: 'Fernando Morales',
        born: new Date(1998, 9, 29),
        friends: [4, 10, 14, 26],
        isFriend: false,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 16,
        name: 'Isabel Gomez',
        born: new Date(1991, 6, 18),
        friends: [1, 8, 13, 26],
        isFriend: true,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 17,
        name: 'Andres Mendoza',
        born: new Date(1984, 2, 5),
        friends: [3, 5, 11, 27, 30],
        isFriend: false,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 18,
        name: 'Valeria Silva',
        born: new Date(1996, 11, 12),
        friends: [2, 7, 14, 29],
        isFriend: true,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 19,
        name: 'Jorge Delgado',
        born: new Date(1983, 9, 27),
        friends: [4, 9, 17, 23, 36],
        isFriend: false,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 20,
        name: 'Monica Rios',
        born: new Date(1977, 4, 30),
        friends: [6, 12, 18, 22, 35],
        isFriend: false,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 21,
        name: 'Daniel Romero',
        born: new Date(1992, 1, 8),
        friends: [1, 8, 15, 25],
        isFriend: true,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 22,
        name: 'Paola Navarro',
        born: new Date(1989, 8, 22),
        friends: [2, 5, 9, 28, 39],
        isFriend: false,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 23,
        name: 'Raul Montes',
        born: new Date(1975, 7, 11),
        friends: [7, 11, 16, 24, 30],
        isFriend: false,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 24,
        name: 'Marina Paredes',
        born: new Date(2003, 3, 2),
        friends: [3, 10, 14, 27],
        isFriend: true,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 25,
        name: 'Hugo Saavedra',
        born: new Date(1997, 10, 25),
        friends: [1, 6, 12, 26, 35],
        isFriend: false,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 26,
        name: 'Adriana Rojas',
        born: new Date(1986, 5, 7),
        friends: [2, 9, 17, 22],
        isFriend: true,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 27,
        name: 'Roberto Cordero',
        born: new Date(1990, 12, 15),
        friends: [4, 8, 13, 29, 39],
        isFriend: false,
        img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 28,
        name: 'Ana Soto',
        born: new Date(1981, 11, 20),
        friends: [5, 10, 16, 23, 36],
        isFriend: false,img: "https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    },
    {
        id: 29,
        name: 'Carlos Mora',
        born: new Date(1994, 9, 28),
        friends: [3, 11, 15, 21],
        isFriend: true,
        
    },
    {
        id: 30,
        name: 'Laura Chavez',
        born: new Date(2002, 7, 9),
        friends: [7, 14, 18, 27],
        isFriend: false,
    },
    {
        id: 31,
        name: 'Ana Garcia',
        born: new Date(1993, 5, 14),
        friends: [6, 12, 19, 24],
        isFriend: true,
    },
    {
        id: 32,
        name: 'Diego Morales',
        born: new Date(1982, 3, 30),
        friends: [4, 7, 15, 26, 29],
        isFriend: false,
    },
    {
        id: 33,
        name: 'Sara Ramirez',
        born: new Date(1991, 10, 9),
        friends: [2, 10, 18, 23],
        isFriend: true,
    },
    {
        id: 34,
        name: 'Felipe Lopez',
        born: new Date(1987, 8, 22),
        friends: [1, 9, 14, 25],
        isFriend: false,
    },
    {
        id: 35,
        name: 'Valentina Fernandez',
        born: new Date(2000, 7, 5),
        friends: [5, 11, 16, 21, 27],
        isFriend: false,
    },
    {
        id: 36,
        name: 'Eduardo Torres',
        born: new Date(1978, 12, 18),
        friends: [3, 8, 13, 20, 30],
        isFriend: true,
    },
    {
        id: 37,
        name: 'Maria Medina',
        born: new Date(1994, 2, 27),
        friends: [7, 15, 19, 26, 31],
        isFriend: false,
    },
    {
        id: 38,
        name: 'Alejandro Paredes',
        born: new Date(1985, 1, 10),
        friends: [2, 9, 17, 28],
        isFriend: true,
    },
    {
        id: 39,
        name: 'Carolina Soto',
        born: new Date(1997, 11, 12),
        friends: [4, 10, 14],
        isFriend: false,
    },
    {
        id: 40,
        name: 'Fernando Montes',
        born: new Date(1980, 9, 29),
        friends: [6, 11, 18, 23],
        isFriend: false,
    },
    {
        id: 41,
        name: 'Gabriela Chavez',
        born: new Date(1989, 6, 7),
        friends: [1, 7, 12, 24],
        isFriend: true,
    },
    {
        id: 42,
        name: 'Antonio Rojas',
        born: new Date(1976, 4, 15),
        friends: [3, 9, 15, 22],
        isFriend: false,
    },
    {
        id: 43,
        name: 'Andrea Mora',
        born: new Date(1992, 3, 25),
        friends: [5, 13, 19, 25],
        isFriend: true,
    },
    {
        id: 44,
        name: 'Ricardo Perez',
        born: new Date(1983, 2, 20),
        friends: [2, 11, 16, 29],
        isFriend: false,
    },
    {
        id: 45,
        name: 'Camila Delgado',
        born: new Date(2001, 1, 8),
        friends: [4, 12, 18, 23, 31],
        isFriend: false,
    },
    {
        id: 46,
        name: 'Lucas Gomez',
        born: new Date(1993, 7, 14),
        friends: [6, 15, 19, 24],
        isFriend: true,
    },
    {
        id: 47,
        name: 'Paulina Morales',
        born: new Date(1981, 6, 30),
        friends: [4, 8, 16, 26, 29],
        isFriend: false,
    },
    {
        id: 48,
        name: 'Martin Ramirez',
        born: new Date(1990, 11, 9),
        friends: [2, 10, 18, 23],
        isFriend: true,
    },
    {
        id: 49,
        name: 'Alicia Delgado',
        born: new Date(1987, 9, 22),
        friends: [1, 9, 14, 25],
        isFriend: false,
    },
    {
        id: 50,
        name: 'Sebastian Fernandez',
        born: new Date(2000, 5, 5),
        friends: [5, 11, 17, 21, 27],
        isFriend: false,
    },
    {
        id: 51,
        name: 'Valentina Torres',
        born: new Date(1978, 1, 18),
        friends: [3, 8, 13, 20, 30],
        isFriend: true,
    },
    {
        id: 52,
        name: 'Camilo Medina',
        born: new Date(1994, 0, 27),
        friends: [7, 16, 19, 26, 31],
        isFriend: false,
    },
    {
        id: 53,
        name: 'Sofia Paredes',
        born: new Date(1985, 9, 10),
        friends: [2, 9, 17, 28],
        isFriend: true,
    },
    {
        id: 54,
        name: 'Mateo Soto',
        born: new Date(1997, 8, 12),
        friends: [4, 10, 15],
        isFriend: false,
    },
    {
        id: 55,
        name: 'Isabella Montes',
        born: new Date(1980, 7, 29),
        friends: [6, 11, 18, 23],
        isFriend: false,
    },
    {
        id: 56,
        name: 'Alejandro Chavez',
        born: new Date(1989, 4, 7),
        friends: [1, 7, 12, 24],
        isFriend: true,
    },
    {
        id: 57,
        name: 'Natalia Rojas',
        born: new Date(1976, 2, 15),
        friends: [3, 9, 15, 22],
        isFriend: false,
    },
    {
        id: 58,
        name: 'Mariano Mora',
        born: new Date(1992, 1, 25),
        friends: [5, 13, 19, 25],
        isFriend: true,
    },
    {
        id: 59,
        name: 'Gabriela Perez',
        born: new Date(1983, 0, 20),
        friends: [2, 11, 16, 29],
        isFriend: false,
    },
    {
        id: 60,
        name: 'Juan Delgado',
        born: new Date(2001, 11, 8),
        friends: [4, 12, 18, 23, 31],
        isFriend: false,
    },
    {
        id: 61,
        name: 'Federico Gomez',
        born: new Date(1993, 7, 14),
        friends: [6, 15, 19, 24],
        isFriend: true,
    },
    {
        id: 62,
        name: 'Constanza Morales',
        born: new Date(1981, 6, 30),
        friends: [4, 8, 16, 26, 29],
        isFriend: false,
    },
    {
        id: 63,
        name: 'Sebastian Ramirez',
        born: new Date(1990, 11, 9),
        friends: [2, 10, 18, 23],
        isFriend: true,
    },
    {
        id: 64,
        name: 'Victoria Delgado',
        born: new Date(1987, 9, 22),
        friends: [1, 9, 14, 25],
        isFriend: false,
    },
    {
        id: 65,
        name: 'Cristian Fernandez',
        born: new Date(2000, 5, 5),
        friends: [5, 11, 17, 21, 27],
        isFriend: false,
    },
    {
        id: 66,
        name: 'Isabella Torres',
        born: new Date(1978, 1, 18),
        friends: [3, 8, 13, 20, 30],
        isFriend: true,
    },
    {
        id: 67,
        name: 'Juan Medina',
        born: new Date(1994, 0, 27),
        friends: [7, 16, 19, 26, 31],
        isFriend: false,
    },
    {
        id: 68,
        name: 'Andrea Paredes',
        born: new Date(1985, 9, 10),
        friends: [2, 9, 17, 28],
        isFriend: true,
    },
    {
        id: 69,
        name: 'Felipe Soto',
        born: new Date(1997, 8, 12),
        friends: [4, 10, 15],
        isFriend: false,
    },
    {
        id: 70,
        name: 'Valentina Montes',
        born: new Date(1980, 7, 29),
        friends: [6, 11, 18, 23],
        isFriend: false,
    },
    {
        id: 71,
        name: 'Santiago Chavez',
        born: new Date(1989, 4, 7),
        friends: [1, 7, 12, 24],
        isFriend: true,
    },
    {
        id: 72,
        name: 'Valeria Rojas',
        born: new Date(1976, 2, 15),
        friends: [3, 9, 15, 22],
        isFriend: false,
    },
    {
        id: 73,
        name: 'Maximiliano Mora',
        born: new Date(1992, 1, 25),
        friends: [5, 13, 19, 25],
        isFriend: true,
    },
    {
        id: 74,
        name: 'Daniela Perez',
        born: new Date(1983, 0, 20),
        friends: [2, 11, 16, 29],
        isFriend: false,
    },
    {
        id: 75,
        name: 'Antonio Delgado',
        born: new Date(2001, 11, 8),
        friends: [4, 12, 18, 23, 31],
        isFriend: false,
    },{
        id: 76,
        name: 'Julian Gomez',
        born: new Date(1993, 7, 14),
        friends: [6, 15, 19, 24],
        isFriend: true,
    },
    {
        id: 77,
        name: 'Gabriela Morales',
        born: new Date(1981, 6, 30),
        friends: [4, 8, 16, 26, 29],
        isFriend: false,
    },
    {
        id: 78,
        name: 'Felipe Ramirez',
        born: new Date(1990, 11, 9),
        friends: [2, 10, 18, 23],
        isFriend: true,
    },
    {
        id: 79,
        name: 'Laura Delgado',
        born: new Date(1987, 9, 22),
        friends: [1, 9, 14, 25],
        isFriend: false,
    },
    {
        id: 80,
        name: 'Alejandro Fernandez',
        born: new Date(2000, 5, 5),
        friends: [5, 11, 17, 21, 27],
        isFriend: false,
    },
    {
        id: 81,
        name: 'Sofia Torres',
        born: new Date(1978, 1, 18),
        friends: [3, 8, 13, 20, 30],
        isFriend: true,
    },
    {
        id: 82,
        name: 'Mateo Medina',
        born: new Date(1994, 0, 27),
        friends: [7, 16, 19, 26, 31],
        isFriend: false,
    },
    {
        id: 83,
        name: 'Isabella Paredes',
        born: new Date(1985, 9, 10),
        friends: [2, 9, 17, 28],
        isFriend: true,
    },
    {
        id: 84,
        name: 'Lucas Soto',
        born: new Date(1997, 8, 12),
        friends: [4, 10, 15],
        isFriend: false,
    },
    {
        id: 85,
        name: 'Valentina Montes',
        born: new Date(1980, 7, 29),
        friends: [6, 11, 18, 23],
        isFriend: false,
    },
    {
        id: 86,
        name: 'Nicolás Chavez',
        born: new Date(1989, 4, 7),
        friends: [1, 7, 12, 24],
        isFriend: true,
    },
    {
        id: 87,
        name: 'Valeria Rojas',
        born: new Date(1976, 2, 15),
        friends: [3, 9, 15, 22],
        isFriend: false,
    },
    {
        id: 88,
        name: 'Maximiliano Mora',
        born: new Date(1992, 1, 25),
        friends: [5, 13, 19, 25],
        isFriend: true,
    },
    {
        id: 89,
        name: 'Daniela Perez',
        born: new Date(1983, 0, 20),
        friends: [2, 11, 16, 29],
        isFriend: false,
    },
    {
        id: 90,
        name: 'Antonio Delgado',
        born: new Date(2001, 11, 8),
        friends: [4, 12, 18, 23, 31,54,31,56,82,24,27,71],
        isFriend: false,
    },
    {
        id: 91,
        name: 'Catalina Gomez',
        born: new Date(1993, 7, 14),
        friends: [6, 15, 19, 24],
        isFriend: true,
    },
    {
        id: 92,
        name: 'Fernando Morales',
        born: new Date(1981, 6, 30),
        friends: [4, 8, 16, 26, 29],
        isFriend: false,
    },
    {
        id: 93,
        name: 'María Ramirez',
        born: new Date(1990, 11, 9),
        friends: [2, 10, 18, 23],
        isFriend: true,
    },
    {
        id: 94,
        name: 'Emilio Delgado',
        born: new Date(1987, 9, 22),
        friends: [1, 9, 14, 25],
        isFriend: false,
    },
    {
        id: 95,
        name: 'Carolina Fernandez',
        born: new Date(2000, 5, 5),
        friends: [5, 11, 17, 21, 27],
        isFriend: false,
    },
    {
        id: 96,
        name: 'Joaquín Torres',
        born: new Date(1978, 1, 18),
        friends: [3, 8, 13, 20, 30],
        isFriend: true,
    },
    {
        id: 97,
        name: 'Renata Medina',
        born: new Date(1994, 0, 27),
        friends: [7, 16, 19, 26, 31,34,55,32,59,79],
        isFriend: false,
    },
    {
        id: 98,
        name: 'David Paredes',
        born: new Date(1985, 9, 10),
        friends: [2, 9, 17, 28],
        isFriend: true,
    },
    {
        id: 99,
        name: 'Daniela Soto',
        born: new Date(1997, 8, 12),
        friends: [4, 10, 15],
        isFriend: false,
    },
    {
        id: 100,
        name: 'Andrés Montes',
        born: new Date(1980, 7, 29),
        friends: [6, 11, 18, 23],
        isFriend: false,
    }

    // Agrega más conjuntos de datos aquí
];

export default data;