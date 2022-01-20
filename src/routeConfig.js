import Home from "./pages/Home"
import News from "./pages/News"
import NewsHome from "./pages/NewsHome"
import NewsDetail from "./pages/NewsDetail"
import NewsSearch from "./pages/NewsSearch"

const routeConfig = [
  {
    path: '/news', name: 'news', component: News,
    children: [
      {path: '/', name: 'newsHome', exact: true, component: NewsHome},
      {path: '/detail', name: 'newsDetail', exact: true, component: NewsDetail},
      {path: '/search', name: 'newsSearch', exact: true, component: NewsSearch}
    ]
  },
  { path: '/', name: 'home', component: Home }
];

export default routeConfig;
