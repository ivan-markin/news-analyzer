import './analytics.css';
import '../blocks/logo/logo.css';
import '../blocks/content-title/content-title.css';
import '../blocks/content-small-title/content-small-title.css';
import '../blocks/content-paragraph-text/content-paragraph-text.css';
import '../blocks/footer/footer.css';

import Statistics from '../js/components/Statistics';
import DataStorage from '../js/modules/DataStorage';

const dataStorage = new DataStorage();
const statistics = new Statistics(dataStorage.getData());

statistics.setHeaderData();
statistics.setDate();
statistics.buildDiagrams();
