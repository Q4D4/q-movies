import { PageData } from './models';

// Primary meta properties
const metaData = {
	primary_title: 'Q-Movies',
	main_slogan: 'ფილმები და სერიალები ქართულად',
	secondary_slogan: 'ქურდის ქურდი ცხონდაო...'
}

// Meta info for pages
const home = new PageData(`${metaData.primary_title} - ფილმები ქართულად, სერიალები ქართულად, filmebi qartulad, pilmebi kartulad, serialebi qartulad`, 'ფილმები ქართულად, სერიალები ქართულად, ახალი ფილმები, ახალი სერიალები, თურქული სერიალები, filmebi qartulad, pilmebi kartulad, serialebi qartulad, serialebi kartulad', 'ფილმები ქართულად, სერიალები ქართულად, ახალი ფილმები, ახალი სერიალები, თურქული სერიალები ქართულად, საუკეთესო ფილმები, საუკეთესო სერიალები, ტოპ ფილმები, ტოპ სერიალები, filmebi qartulad, serialebi qartulad, pilmebi kartulad, serialebi kartulad,turkuli serialebi kartulad');

const movies = new PageData(`${metaData.primary_title} - ფილმები ქართულად, filmebi qartulad, pilmebi kartulad`, 'ფილმები ქართულად, ახალი ფილმები, filmebi qartulad, pilmebi kartulad', 'ფილმები ქართულად, ახალი ფილმები, საუკეთესო ფილმები, ტოპ ფილმები, filmebi qartulad, pilmebi kartulad,');

const series = new PageData(`${metaData.primary_title} - სერიალები ქართულად, serialebi qartulad, serialebi kartulad`, 'სერიალები ქართულად, ახალი სერიალები, თურქული სერიალები, serialebi qartulad, serialebi kartulad', 'სერიალები ქართულად, ახალი სერიალები, თურქული სერიალები ქართულად, საუკეთესო სერიალები, ტოპ სერიალები, serialebi qartulad, serialebi kartulad,turkuli serialebi kartulad');

export { home, movies, series };