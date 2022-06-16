const timeline = [
  {
    id: "0",
    avatar:
      "https://images.unsplash.com/profile-fb-1585691724-04b10a223411.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    username: "wongmjane",
    message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
    
    (gzipped size went from 16.6 KB down to 2.7 KB!!)
    
    * Chrome 79+, Safari 14+, Firefox 68+`,
  },
  {
    id: "1",
    avatar:
      "https://images.unsplash.com/profile-1569284631136-080991ff38f9image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    username: "midudev",
    message: "Wow, devter está funcionando y vivo 🦉",
    name: "Miguel Ángel Durán",
  },
  {
    id: "2",
    username: "d4nidev",
    name: "Daniel de la Cruz",
    avatar:
      "https://images.unsplash.com/profile-fb-1605396516-cbed62c93dce.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
  },
  {
    id: "3",
    avatar:
      "https://images.unsplash.com/profile-fb-1585691724-04b10a223411.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    username: "wongmjane",
    message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
    
    (gzipped size went from 16.6 KB down to 2.7 KB!!)
    
    * Chrome 79+, Safari 14+, Firefox 68+`,
  },
  {
    id: "4",
    avatar:
      "https://images.unsplash.com/profile-1569284631136-080991ff38f9image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    username: "midudev",
    message: "Wow, devter está funcionando y vivo 🦉",
    name: "Miguel Ángel Durán",
  },
  {
    id: "5",
    username: "d4nidev",
    name: "Daniel de la Cruz",
    avatar:
      "https://images.unsplash.com/profile-fb-1605396516-cbed62c93dce.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
  },
  {
    id: "6",
    avatar:
      "https://images.unsplash.com/profile-fb-1585691724-04b10a223411.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    username: "wongmjane",
    message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
    
    (gzipped size went from 16.6 KB down to 2.7 KB!!)
    
    * Chrome 79+, Safari 14+, Firefox 68+`,
  },
  {
    id: "7",
    avatar:
      "https://images.unsplash.com/profile-1569284631136-080991ff38f9image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    username: "midudev",
    message: "Wow, devter está funcionando y vivo 🦉",
    name: "Miguel Ángel Durán",
  },
  {
    id: "8",
    username: "d4nidev",
    name: "Daniel de la Cruz",
    avatar:
      "https://images.unsplash.com/profile-fb-1605396516-cbed62c93dce.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
  },
  {
    id: "9",
    avatar:
      "https://images.unsplash.com/profile-fb-1585691724-04b10a223411.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    username: "wongmjane",
    message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
    
    (gzipped size went from 16.6 KB down to 2.7 KB!!)
    
    * Chrome 79+, Safari 14+, Firefox 68+`,
  },
  {
    id: "10",
    avatar:
      "https://images.unsplash.com/profile-1569284631136-080991ff38f9image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    username: "midudev",
    message: "Wow, devter está funcionando y vivo 🦉",
    name: "Miguel Ángel Durán",
  },
  {
    id: "11",
    username: "d4nidev",
    name: "Daniel de la Cruz",
    avatar:
      "https://images.unsplash.com/profile-fb-1605396516-cbed62c93dce.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
  },
]

export default (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.send(JSON.stringify(timeline))
}
