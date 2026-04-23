// Datos estáticos de la aplicación
export const musicData = {
  albums: [
    {
      id: 1,
      title: 'Bossanova',
      artist: 'Pixies',
      year: 1990,
      genre: 'Alternative Rock',
      cover: '/assets/images/pixies-bossanova.jpg',
      rating: 8.5,
      reviews: 1200,
      description: 'Un giro hacia el surf rock...',
      story: 'Bossanova marcó un punto de inflexión para Pixies en 1990. Lanzado tras el éxito de "Doolittle", este álbum mostró una banda evolucionando hacia territorios más experimentales. La influencia del surf rock brasileño (bossanova) se mezcla con la angustia del alternative rock estadounidense. Canciones como "Velouria" y "Allison" se convirtieron en clásicos del género.',
      artistInfo: 'Pixies fue una banda pionera del alternative rock estadounidense de los 80s, liderada por el singular Black Francis.',
      tracks: [
        'Cecilia Ann', 'Rock Music', 'Velouria', 'Allison', 
        'Is She Weird', 'Ana', 'All Over the World', 'Dig for Fire',
        'Down to the Well', 'The Happening', 'Blown Away', 'Hang Wire', 
        'Stormy Weather', 'Havalina'
      ]
    },
    {
      id: 2,
      title: 'Highvision',
      artist: 'Supercar',
      year: 2002,
      genre: 'Electronic Rock',
      cover: '/assets/images/supercar-highvision.jpg',
      rating: 9.0,
      reviews: 850,
      description: 'Una mezcla futurista...',
      tracks: [
        'Starline', 'Warning Bell', 'Storywriter', 'Aoharu Youth',
        'Otogi Nation', 'Strobolights', 'I', 'Yumegiwa Last Boy',
        'Nijiiro Darkness', 'Silent Yaritori'
      ]
    },
    {
      id: 3,
      title: 'Cocktail',
      artist: 'Belanova',
      year: 2003,
      genre: 'Electropop',
      cover: '/assets/images/belanova-cocktail.jpg',
      rating: 8.2,
      reviews: 600,
      description: 'El debut fresco de la banda...',
      tracks: [
        'Barco de papel', 'Y Aún Así Te Vas', 'What a Shame', 'Fragilidad',
        'Tranquilo', 'Y...', 'Apaga la luz', 'Tus ojos',
        'Suele pasar', 'Arena (Outro)'
      ]
    },
    {
      id: 4,
      title: 'In the Hothouse',
      artist: 'The Sound',
      year: 1985,
      genre: 'Post-Punk',
      cover: '/assets/images/the-sound-in-the-hothouse.jpg',
      rating: 8.8,
      reviews: 450,
      description: 'Un álbum en vivo...',
      tracks: [
        'Winning', 'Under You', 'Total Recall', 'Skeletons', 'Prove Me Wrong',
        'Wildest Dreams', 'Burning Part of Me', 'Heartland', 'Hothouse',
        'Judgement', 'Counting the Days', 'Red Paint', 'Silent Air',
        'Sense of Purpose', 'Missiles'
      ]
    },
    {
      id: 5,
      title: 'Jordan: The Comeback',
      artist: 'Prefab Sprout',
      year: 1990,
      genre: 'Sophisti-pop',
      cover: '/assets/images/prefab-sprout-jordan-the-comeback.jpg',
      rating: 9.4,
      reviews: 900,
      description: 'Una epopeya pop ambiciosa...',
      tracks: [
        'Looking for Atlantis', 'Wild Horses', 'Machine Gun Ibiza', 'We Let the Stars Go',
        'Carnival 2000', 'Jordan: The Comeback', 'Jesse James Symphony', 'Jesse James Bolero',
        'Moon Dog', 'All the World Loves Lovers', 'All Boys Believe Anything', 'The Ice Maiden',
        'Paris Smith', 'The Wedding March', 'One of the Broken', 'Michael',
        'Mercy', 'Scarlet Nights', 'Doo Wop in Harlem'
      ]
    },
    {
      id: 6,
      title: 'No Thank You',
      artist: 'Coaltar of the Deepers',
      year: 2001,
      genre: 'Shoegaze',
      cover: '/assets/images/coaltar-of-the-deepers-no-thank-you.jpg',
      rating: 8.9,
      reviews: 300,
      description: 'Mezcla ecléctica...',
      tracks: [
        'It Dawns Before', 'Good Morning', 'Joy Ride', 'Star Love', '15 Knots',
        'Giant', 'Jet Set', 'The Systems Made of Greed', 'Hibernate', 'The End of Summer',
        'No Thank You', 'Dreamman', "Deepers' Re Sleeping", 'Mexico (Ver.N)', 'Haru no Gyouninzaka'
      ]
    },
    {
      id: 7,
      title: 'Locura',
      artist: 'Virus',
      year: 1985,
      genre: 'New Wave',
      cover: '/assets/images/virus-locura.jpg',
      rating: 9.2,
      reviews: 1500,
      description: 'El pico creativo del pop argentino...',
      tracks: [
        'Pronta entrega', 'Tomo lo que encuentro', 'Pecados para dos', 'Destino circular',
        'Una luna de miel en la mano', 'Dicha feliz', 'Sin disfraz', 'Lugares comunes'
      ]
    },
    {
      id: 8,
      title: 'Stereo Type A',
      artist: 'Cibo Matto',
      year: 1999,
      genre: 'Trip Hop',
      cover: '/assets/images/cibo-matto-stereo-type-a.jpg',
      rating: 8.6,
      reviews: 700,
      description: 'Un festín sonoro...',
      tracks: [
        'Working for Vacation', 'Spoon', 'Flowers', 'Lint of Love', 'Moonchild',
        'Sci-Fi Wasabi', 'Clouds', 'Speechless', 'King of Silence', 'Backseat',
        'Blue Train', 'Sunday Part I', 'Sunday Part II', 'Stone', 'Mortming', 'Country'
      ]
    },
    {
      id: 9,
      title: 'ATLiens',
      artist: 'Outkast',
      year: 1996,
      genre: 'Hip Hop',
      cover: '/assets/images/outkast-atliens.jpg',
      rating: 9.5,
      reviews: 3000,
      description: 'Un viaje espacial...',
      tracks: [
        'You May Die (Intro)', 'Two Dope Boyz (In a Cadillac)', 'ATLiens',
        'Wheelz of Steel', 'Jazzy Belle', 'Elevators (Me & You)', 'Ova da Wudz',
        'Babylon', 'Wailin\'', 'Mainstream', 'Decatur Psalm', 'Millennium',
        'E.T. (Extraterrestrial)', '13th Floor / Growing Old',
        'Elevators (Me & You) (ONP 86 Mix)'
      ]
    },
    {
      id: 10,
      title: 'The Doldrums',
      artist: 'Ariel Pink',
      year: 2000,
      genre: 'Hypnagogic Pop',
      cover: '/assets/images/ariel-pinks-haunted-graffiti-the-doldrums.jpg',
      rating: 8.4,
      reviews: 500,
      description: 'Lo-fi experimental...',
      tracks: [
        'Good Kids Make Bad Grown Ups', 'Strange Fires', 'Among Dreams', 'For Kate I Wait',
        'Haunted Graffiti', 'Gray Sunset', 'The Doldrums', 'Envelopes Another Day',
        'The Ballad of Bobby Pyn'
      ]
    }
  ],
  genres: [
    { 
      id: 1, 
      name: 'Alternative Rock', 
      count: 1,
      origin: 'Estados Unidos, años 80',
      history: 'El Alternative Rock surgió como reacción al glam rock y al punk, incorporando elementos del post-punk y noise rock. Género caracterizado por su DIY (hazlo tú mismo) y su rechazo a las convenciones comerciales del rock tradicional.',
      characteristics: 'Distorsión controlada, vocales expresivos, letras introspectivas, estructura experimental',
      keyArtists: 'The Pixies, R.E.M., Joy Division, Sonic Youth',
      influence: 'Influenció profundamente la música de los 90s y abrió puertas a bandas independientes en la radio comercial'
    },
    { 
      id: 2, 
      name: 'Electronic Rock', 
      count: 1,
      origin: 'Alemania/Reino Unido, años 70-80',
      history: 'Fusión de la experimentación electrónica de bandas como Kraftwerk con la energía del rock. Combina sintetizadores analógicos con guitarras eléctricas y batería, creando un sonido futurista y épico.',
      characteristics: 'Sintetizadores prominentes, ritmo mecanizado, atmósfera futurista, guitarras electrónicas',
      keyArtists: 'Kraftwerk, Depeche Mode, Devo, Neon Indian',
      influence: 'Pionero en la fusión entre electrónica y rock, precursor del electropop y síntesis digital moderna'
    },
    { 
      id: 3, 
      name: 'Electropop', 
      count: 1,
      origin: 'Japón/México, años 2000s',
      history: 'Género moderno que mezcla sintetizadores vintage con pop melódico. Resurge en los 2000s con bandas que reviven el synth-pop de los 80s pero con una aproximación fresca y contemporánea.',
      characteristics: 'Sintetizadores retro, pop pegajoso, ritmo electrónico, melodías nostálgicas',
      keyArtists: 'Belanova, Hot Chip, Kavinsky, Chromatics',
      influence: 'Parte importante de la escena indie electrónica contemporánea y la música sintética moderna'
    },
    { 
      id: 4, 
      name: 'Post-Punk', 
      count: 1,
      origin: 'Reino Unido, años 70-80',
      history: 'Surgió inmediatamente después del punk, preservando su energía cruda pero explorando territorialidades más oscuras y artísticas. Bandas como Joy Division y Bauhaus definieron la atmósfera gótica del género.',
      characteristics: 'Bajo intrincado, síntesis oscura, voces expresivas, ritmos complejos',
      keyArtists: 'Joy Division, Bauhaus, The Cure, Siouxsie and the Banshees',
      influence: 'Fundacional para el movimiento gótico, industrial y dark wave posterior'
    },
    { 
      id: 5, 
      name: 'Sophisti-pop', 
      count: 1,
      origin: 'Reino Unido, años 80-90',
      history: 'Género sofisticado que combina pop tradicional con arreglos orquestales complejos y letras poéticas. Prefab Sprout fue el exponente máximo de este sonido elegante y reflexivo.',
      characteristics: 'Orquestaciones complejas, letras poéticas, melodías sofisticadas, producción cuidada',
      keyArtists: 'Prefab Sprout, Pet Shop Boys, ABC, Dexy\'s Midnight Runners',
      influence: 'Influenció la música pop de quality y demostró que el pop podía ser intelectualmente sofisticado'
    },
    { 
      id: 6, 
      name: 'Shoegaze', 
      count: 1,
      origin: 'Reino Unido, años 90',
      history: 'Género experimental basado en capas densas de guitarra distorsionada con voces a menudo sumergidas en la mezcla. El nombre viene de que los artistas miraban hacia abajo mientras tocaban debido a los efectos complejos.',
      characteristics: 'Mucha distorsión, reverb, voces etéreas, estructura no-lineal, melodía bajo capas de ruido',
      keyArtists: 'My Bloody Valentine, Cocteau Twins, Slowdive, Coaltar of the Deepers',
      influence: 'Redefinió cómo se podía usar la guitarra y los efectos, influenciando dream pop y noise rock'
    },
    { 
      id: 7, 
      name: 'New Wave', 
      count: 1,
      origin: 'Argentina/Nueva York, años 80',
      history: 'Fusión de punk y synth-pop que enfatiza la síntesis electrónica con la actitud punk. En Latinoamérica, bandas como Virus llevaron el new wave a niveles de creatividad artística sin precedentes.',
      characteristics: 'Sintetizadores, energía punk, voces dramáticas, producción minimalista, guitarras cortantes',
      keyArtists: 'Virus, Blondie, Talking Heads, Duran Duran, Kraftwerk',
      influence: 'Puente entre el punk y la música electrónica, influenció todas las formas de synth-pop'
    },
    { 
      id: 8, 
      name: 'Trip Hop', 
      count: 1,
      origin: 'Reino Unido, años 90',
      history: 'Mezcla de hip-hop, soul y música electrónica que surgió en Bristol. Conocido por sus tempos lentos, atmosfera oscura y producción lush. Género que redefinió la música experimental de los 90s.',
      characteristics: 'Tempos lentos, beats de hip-hop procesados, orquestaciones lush, voces melancólicas, atmósfera oscura',
      keyArtists: 'Portishead, Massive Attack, Tricky, Cibo Matto',
      influence: 'Influenció electrónica, música ambiental y sigue siendo referencia para producción cinematográfica'
    },
    { 
      id: 9, 
      name: 'Hip Hop', 
      count: 1,
      origin: 'Estados Unidos (Nueva York), años 70',
      history: 'Nacido en el Bronx, el hip-hop revolucionó la música global. Combina rapping, DJing, beatboxing y break dancing. Evolucionó desde fiestas callejeras a un fenómeno cultural planetario, con Outkast llevando el género a nuevas dimensiones artísticas.',
      characteristics: 'Beats atrapadores, rimas, sampling, producción de ritmo pesado, narrativa urbana',
      keyArtists: 'Outkast, Nas, Wu-Tang Clan, A Tribe Called Quest, Kendrick Lamar',
      influence: 'Revolucionó la música global, influenció pop, R&B, rock y prácticamente todos los géneros modernos'
    },
    { 
      id: 10, 
      name: 'Hypnagogic Pop', 
      count: 1,
      origin: 'Estados Unidos, años 2000s',
      history: 'Término acuñado por Ariel Pink para describir música creada bajo estados alterados de consciencia, con muestras degradadas, voces distorsionadas y producción lo-fi intencional. Representa un retorno a la experimentación casera.',
      characteristics: 'Producción lo-fi, muestras degradadas, voces distorsionadas, composición aleatoria, atmósfera onírica',
      keyArtists: 'Ariel Pink, R. Stevie Moore, Oneohtrix Point Never',
      influence: 'Pionero de la estética lo-fi moderna y la experimentación acústica digital contemporánea'
    }
  ],
  users: [
    { id: 1, username: 'musiclover', avatar: '👤' },
    { id: 2, username: 'rockfan', avatar: '🎸' },
    { id: 3, username: 'vinyl_collector', avatar: '🎵' }
  ],
  lists: [
    {
      id: 1,
      name: 'Mis álbumes favoritos',
      owner: 'musiclover',
      albums: [1, 2, 5],
      description: 'Los mejores álbumes de todos los tiempos'
    },
    {
      id: 2,
      name: 'Rock Clásico',
      owner: 'rockfan',
      albums: [1, 5, 6, 7, 8],
      description: 'Los clásicos del rock que no pueden faltar'
    },
    {
      id: 3,
      name: 'Electrónica Experimental',
      owner: 'vinyl_collector',
      albums: [2, 3, 8, 9],
      description: 'Viajes por la electrónica y el sonido futurista'
    },
    {
      id: 4,
      name: 'Pop Alternativo',
      owner: 'musiclover',
      albums: [3, 4, 10],
      description: 'Lo mejor del pop alternativo y shoegaze'
    },
    {
      id: 5,
      name: 'Latinos Invencibles',
      owner: 'rockfan',
      albums: [7],
      description: 'Los mejores artistas del rock latino'
    }
  ],
  forumTopics: [
    {
      id: 1,
      title: 'La Evolución del Shoegaze: De los 90 a Hoy',
      author: 'musiclover',
      date: '2026-04-20',
      category: 'Géneros',
      excerpt: 'El shoegaze revolucionó la música con sus capas densas de guitarras distorsionadas. Descubre cómo este género nacido en Reino Unido ha influido en la música contemporánea.',
      content: 'El shoegaze es un género que surgió a principios de los años 90 en el Reino Unido, caracterizado por capas densas de efectos de guitarra, baja distorsión y voces a menudo sumergidas en la mezcla. Bandas como My Bloody Valentine y Slowdive definieron el sonido del género. Hoy en día, el shoegaze sigue siendo una fuente de inspiración para artistas contemporáneos.'
    },
    {
      id: 2,
      title: 'Hip Hop Digital: La Revolución de Outkast',
      author: 'rockfan',
      date: '2026-04-18',
      category: 'Artistas',
      excerpt: 'Cómo el álbum ATLiens llevó el hip-hop a nuevas dimensiones con su producción futurista y narrativa cósmica.',
      content: 'Outkast marcó un punto de inflexión en el hip-hop con su álbum ATLiens. A través de la producción innovadora y una temática basada en el espacio exterior, Andre 3000 y Big Boi crearon una obra maestra que influyó a generaciones de artistas.'
    },
    {
      id: 3,
      title: 'Electropop Latinoamericano: Belanova y la Revolución Sintética',
      author: 'vinyl_collector',
      date: '2026-04-15',
      category: 'Géneros',
      excerpt: 'La banda mexicana Belanova redefinió el electropop latinoamericano con su sonido fresco y accesible. Analiza cómo revolucionaron la escena musical de Latinoamérica.',
      content: 'Belanova fue pionera del electropop en Latinoamérica con su álbum Cocktail. La combinación de sintetizadores vintage con sensibilidades pop contemporáneas creó un sonido único que marcó la diferencia en la música electrónica de los 2000s.'
    },
    {
      id: 4,
      title: 'Post-Punk: La Oscuridad Artística de The Sound',
      author: 'musiclover',
      date: '2026-04-12',
      category: 'Géneros',
      excerpt: 'The Sound llevó el post-punk británico a nuevas alturas con su álbum In the Hothouse, combinando angustia emocional con sofisticación musical.',
      content: 'The Sound fue uno de los grandes exponentes del post-punk, creando música que era al mismo tiempo accesible y experimentalmente compleja. Su álbum In the Hothouse es un testamento a la capacidad del género para expresar emociones profundas.'
    },
    {
      id: 5,
      title: 'Trip Hop: La Atmósfera de Cibo Matto',
      author: 'rockfan',
      date: '2026-04-10',
      category: 'Géneros',
      excerpt: 'Cibo Matto trasladó el trip hop desde Bristol a Nueva York, creando un sonido único que fusiona influencias japonesas con la oscuridad del género.',
      content: 'Cibo Matto, el dúo ítalo-japonés, llevó el trip hop a nuevas direcciones. Con influencias de la música tradicional japonesa y la sofisticación del género, crearon un sonido distintivo que resonó a nivel global.'
    }
  ],
  reviews: [
    {
      id: 1,
      albumId: 1,
      author: 'musiclover',
      rating: 9,
      text: 'Bossanova es increíble. El surf rock de Pixies es simplemente magistral. Velouria es mi canción favorita.',
      date: '2026-04-15'
    },
    {
      id: 2,
      albumId: 2,
      author: 'rockfan',
      rating: 10,
      text: 'Highvision de Supercar es una mezcla futurista perfecta. La producción es impecable y cada canción transporta a otro mundo.',
      date: '2026-04-10'
    },
    {
      id: 3,
      albumId: 5,
      author: 'vinyl_collector',
      rating: 10,
      text: 'Jordan: The Comeback es una obra maestra absoluta. Prefab Sprout hizo un álbum ambicioso y hermoso. Cada track es legendario.',
      date: '2026-04-08'
    },
    {
      id: 4,
      albumId: 3,
      author: 'musiclover',
      rating: 8,
      text: 'Cocktail es el debut fresco de Belanova. El electropop es adictivo y las melodías son pegadizas. Excelente introducción.',
      date: '2026-04-05'
    },
    {
      id: 5,
      albumId: 9,
      author: 'rockfan',
      rating: 10,
      text: 'ATLiens de Outkast es un viaje espacial increíble. Hip hop de alta calidad con producción futurista. Una verdadera joya.',
      date: '2026-04-02'
    },
    {
      id: 6,
      albumId: 7,
      author: 'vinyl_collector',
      rating: 9,
      text: 'Locura de Virus es el pico creativo del rock argentino. La energía y la creatividad en cada canción es simplemente excepcional.',
      date: '2026-03-30'
    }
  ]
};

// Función para obtener un álbum por ID
export function getAlbumById(id) {
  return musicData.albums.find(album => album.id === parseInt(id));
}

// Función para obtener reseñas de un álbum
export function getReviewsForAlbum(albumId) {
  return musicData.reviews.filter(review => review.albumId === albumId);
}

// Función para obtener álbumes por género
export function getAlbumsByGenre(genre) {
  return musicData.albums.filter(album => album.genre === genre);
}


