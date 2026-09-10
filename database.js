// Banco de dados completo de animes e mangás
const animeDatabase = [
    {
        id: 1,
        name: "Naruto",
        type: "anime",
        year: 2002,
        episodes: 220,
        status: "Completo",
        rating: 8.3,
        genres: ["Ação", "Aventura", "Supernatural"],
        synopsis: "Naruto Uzumaki é um jovem ninja que busca se tornar Hokage, o líder de sua aldeia. Com uma criatura de cauda de raposa selada em seu corpo, ele enfrenta desafios e faz amigos ao longo de sua jornada.",
        studio: "Pierrot",
        director: "Hayato Date",
        cast: ["Junichi Suwabe", "Chie Nakamura"],
        emoji: "🥷",
        relatedManga: "Naruto Manga",
        popularity: "Muito Alto"
    },
    {
        id: 2,
        name: "One Piece",
        type: "anime",
        year: 1999,
        episodes: 1000,
        status: "Em Andamento",
        rating: 8.8,
        genres: ["Ação", "Aventura", "Comédia"],
        synopsis: "Monkey D. Luffy é um pirata determinado que segue em busca do tesouro mais procurado - One Piece - para se tornar o Rei dos Piratas.",
        studio: "Toei Animation",
        director: "Konosuke Uda",
        cast: ["Mayumi Tanaka", "Kazuhiko Inoue"],
        emoji: "🏴‍☠️",
        relatedManga: "One Piece Manga",
        popularity: "Extremamente Alto"
    },
    {
        id: 3,
        name: "Death Note",
        type: "anime",
        year: 2006,
        episodes: 37,
        status: "Completo",
        rating: 8.6,
        genres: ["Psicológico", "Suspense", "Sobrenatural"],
        synopsis: "Um caderno misterioso que mata quem quer que tenha seu nome escrito nele cai nas mãos de um adolescente genial que decide eliminar criminosos.",
        studio: "Madhouse",
        director: "Tetsuro Araki",
        cast: ["Mamoru Miyano", "Kappei Yamaguchi"],
        emoji: "📔",
        relatedManga: "Death Note Manga",
        popularity: "Muito Alto"
    },
    {
        id: 4,
        name: "Tokyo Ghoul",
        type: "anime",
        year: 2014,
        episodes: 48,
        status: "Completo",
        rating: 7.9,
        genres: ["Ação", "Fantasia Sombria", "Horror"],
        synopsis: "Um adolescente comum é transformado em um semi-ghoul após um acidente e deve aprender a viver entre humanos e ghouls, criaturas que se alimentam de carne humana.",
        studio: "Studio Pierrot",
        director: "Shuhei Mobutu",
        cast: ["Natsuhiko Kyogoku"],
        emoji: "👻",
        relatedManga: "Tokyo Ghoul Manga",
        popularity: "Alto"
    },
    {
        id: 5,
        name: "Atacando os Titãs",
        type: "anime",
        year: 2013,
        episodes: 94,
        status: "Completo",
        rating: 8.5,
        genres: ["Ação", "Mistério", "Fantasia"],
        synopsis: "Humanos vivem em muros para se proteger de titãs gigantes comedores de gente. Quando um titã colossal derruba as defesas, Eren e seus amigos se alista no exército para lutar.",
        studio: "Wit Studio / MAPPA",
        director: "Hajime Isayama",
        cast: ["Yuki Kaji", "Yui Ishikawa"],
        emoji: "🧟",
        relatedManga: "Shingeki no Kyojin Manga",
        popularity: "Extremamente Alto"
    },
    {
        id: 6,
        name: "Demon Slayer",
        type: "anime",
        year: 2019,
        episodes: 55,
        status: "Em Andamento",
        rating: 8.7,
        genres: ["Ação", "Aventura", "Sobrenatural"],
        synopsis: "Tanjiro Kamado jurou proteger sua irmã transformada em demônio, tornando-se um matador de demônios para encontrar a forma de restaurá-la.",
        studio: "Ufotable",
        director: "Haruo Sotozaki",
        cast: ["Natsuki Hanae", "Akari Kitou"],
        emoji: "⚔️",
        relatedManga: "Kimetsu no Yaiba Manga",
        popularity: "Extremamente Alto"
    },
    {
        id: 7,
        name: "My Hero Academia",
        type: "anime",
        year: 2016,
        episodes: 113,
        status: "Completo",
        rating: 8.2,
        genres: ["Ação", "Superpoderes", "Escolar"],
        synopsis: "Em um mundo onde a maioria das pessoas tem superpoderes, um adolescente comum é descoberto por um herói lendário e recebe uma chance de se tornar uma lenda.",
        studio: "Bones",
        director: "Kenji Nagasaki",
        cast: ["Daiki Yamashita", "Nobuhiko Okamoto"],
        emoji: "💪",
        relatedManga: "Boku no Hero Academia Manga",
        popularity: "Extremamente Alto"
    },
    {
        id: 8,
        name: "Jujutsu Kaisen",
        type: "anime",
        year: 2020,
        episodes: 47,
        status: "Em Andamento",
        rating: 8.7,
        genres: ["Ação", "Sobrenatural", "Escolar"],
        synopsis: "Um adolescente engole um dedo misterioso de um demônio e é possuído por uma força sombria poderosa. Ele se junta a uma escola de feiticeiros.",
        studio: "MAPPA",
        director: "Park Sung Ho",
        cast: ["Yuuichi Nakamura", "Junya Enoki"],
        emoji: "👹",
        relatedManga: "Jujutsu Kaisen Manga",
        popularity: "Extremamente Alto"
    },
    {
        id: 9,
        name: "Steins;Gate",
        type: "anime",
        year: 2011,
        episodes: 24,
        status: "Completo",
        rating: 9.0,
        genres: ["Ficção Científica", "Psicológico", "Thriller"],
        synopsis: "Um estudante inventa acidentalmente uma máquina do tempo e descobre uma conspiração que ameaça o mundo.",
        studio: "White Fox",
        director: "Hiroshi Hamasaki",
        cast: ["Mamoru Miyano", "Asami Inoue"],
        emoji: "⏰",
        relatedManga: "Steins;Gate Manga",
        popularity: "Alto"
    },
    {
        id: 10,
        name: "Bleach",
        type: "anime",
        year: 2004,
        episodes: 366,
        status: "Completo",
        rating: 7.8,
        genres: ["Ação", "Sobrenatural", "Aventura"],
        synopsis: "Um adolescente comum obtém poderes de um shinigami e assume a responsabilidade de proteger humanos de espíritos malignos.",
        studio: "Pierrot",
        director: "Noriyuki Abe",
        cast: ["Masakazu Morita", "Fumiko Orikasa"],
        emoji: "⚪",
        relatedManga: "Bleach Manga",
        popularity: "Alto"
    },
    {
        id: 11,
        name: "Naruto Manga",
        type: "manga",
        year: 1999,
        chapters: 700,
        volumes: 72,
        status: "Completo",
        rating: 8.4,
        genres: ["Ação", "Aventura", "Supernatural"],
        synopsis: "A série de mangá original que começou tudo. Naruto Uzumaki em sua jornada para se tornar um ninja lendário.",
        author: "Masashi Kishimoto",
        publisher: "Jump Comics",
        emoji: "📚",
        relatedAnime: "Naruto",
        popularity: "Muito Alto"
    },
    {
        id: 12,
        name: "One Piece Manga",
        type: "manga",
        year: 1997,
        chapters: 1100,
        volumes: 108,
        status: "Em Andamento",
        rating: 8.9,
        genres: ["Ação", "Aventura", "Comédia"],
        synopsis: "A série de mangá mais longa e uma das mais populares de todos os tempos. A aventura épica de Monkey D. Luffy.",
        author: "Eiichiro Oda",
        publisher: "Weekly Shonen Jump",
        emoji: "📖",
        relatedAnime: "One Piece",
        popularity: "Extremamente Alto"
    },
    {
        id: 13,
        name: "My Hero Academia Manga",
        type: "manga",
        year: 2014,
        chapters: 426,
        volumes: 33,
        status: "Completo",
        rating: 8.3,
        genres: ["Ação", "Superpoderes", "Escolar"],
        synopsis: "A série de mangá que inspirou o anime de sucesso. Um adolescente sem poderes em um mundo cheio deles.",
        author: "Kohei Horikoshi",
        publisher: "Weekly Shonen Jump",
        emoji: "📕",
        relatedAnime: "My Hero Academia",
        popularity: "Extremamente Alto"
    },
    {
        id: 14,
        name: "Attack on Titan Manga",
        type: "manga",
        year: 2009,
        chapters: 139,
        volumes: 34,
        status: "Completo",
        rating: 8.6,
        genres: ["Ação", "Mistério", "Fantasia"],
        synopsis: "A série de mangá que redefiniu o gênero de ficção científica e fantasia. Uma história épica de sobrevivência e liberdade.",
        author: "Hajime Isayama",
        publisher: "Bessatsu Shonen Magazine",
        emoji: "📘",
        relatedAnime: "Atacando os Titãs",
        popularity: "Extremamente Alto"
    },
    {
        id: 15,
        name: "Demon Slayer Manga",
        type: "manga",
        year: 2016,
        chapters: 205,
        volumes: 23,
        status: "Completo",
        rating: 8.8,
        genres: ["Ação", "Aventura", "Sobrenatural"],
        synopsis: "A série de mangá que conquistou o mundo. A história de Tanjiro e sua luta contra os demônios.",
        author: "Koyoharu Gotouge",
        publisher: "Weekly Shonen Jump",
        emoji: "📗",
        relatedAnime: "Demon Slayer",
        popularity: "Extremamente Alto"
    }
];

// Função para buscar no banco de dados
function searchDatabase(query) {
    const lowerQuery = query.toLowerCase().trim();
    
    if (!lowerQuery) return [];
    
    return animeDatabase.filter(item => 
        item.name.toLowerCase().includes(lowerQuery) ||
        item.author?.toLowerCase().includes(lowerQuery) ||
        item.director?.toLowerCase().includes(lowerQuery) ||
        item.genres.some(g => g.toLowerCase().includes(lowerQuery)) ||
        item.synopsis.toLowerCase().includes(lowerQuery)
    );
}

// Função para obter item por ID
function getItemById(id) {
    return animeDatabase.find(item => item.id === id);
}

// Função para filtrar por tipo
function filterByTypeDatabase(type) {
    if (type === 'all') return animeDatabase;
    return animeDatabase.filter(item => item.type === type);
}

// Função para obter recomendações
function getRecommendations(currentItemId, limit = 4) {
    const currentItem = getItemById(currentItemId);
    if (!currentItem) return [];
    
    return animeDatabase
        .filter(item => 
            item.id !== currentItemId &&
            item.genres.some(g => currentItem.genres.includes(g))
        )
        .slice(0, limit);
}
