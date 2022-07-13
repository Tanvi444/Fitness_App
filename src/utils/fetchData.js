
  export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    },
  };
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '0dac29d2b7mshe7d38909ba44198p164316jsna077e3b3d7d0',
    },
  };
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };












// export const exerciseOptions = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//       'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     },
//   };
  
  // export const youtubeOptions = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  //     'X-RapidAPI-Key': '0dac29d2b7mshe7d38909ba44198p164316jsna077e3b3d7d0',
  //   },
  // };
  
//   export const fetchData = async (url, options) => {
//     const res = await fetch(url, options);
//     const data = await res.json();
  
//     return data;
//   };