


\copy category (name, range_min, range_max) from stdin with delimiter e'\t'
Bias	-5	5
Credibility	0	5
\.

\copy newssite (name, url, route) from stdin with delimiter e'\t'
CNN	https://www.cnn.com/	cnn
Fox News	https://www.foxnews.com/	foxnews
MSNBC	https://www.msnbc.com/	msnbc
Associated Press	https://apnews.com/	apnews
The Guardian	https://theguardian.com/us/	guardian
BBC	https://bbc.com/	bbc
New York Times	https://nytimes.com/	nytimes
Washington Post	https://www.washingtonpost.com/	washingtonpost
Wall Street Journal	https://www.wsj.com/	wsj
New York Post	https://nypost.com/	nypost
ABC	https://abcnews.go.com/	abc
CBS	https://www.cbsnews.com/	cbs
NBC	https://www.nbcnews.com/	nbc
USA Today	https://www.usatoday.com/	usatoday
POLITICO	https://www.politico.com/	politico
Bloomberg	https://www.bloomberg.com/	bloomberg
Vice	https://www.vice.com/en	vice
HuffPost	https://www.huffpost.com/	huffpost
NPR	https://www.npr.org/	npr
Hollywood Reporter	https://www.hollywoodreporter.com/	hollywoodreporter
Newsweek	https://www.newsweek.com/	newsweek
New Yorker	https://www.newyorker.com/	newyorker
Time Magazine	https://time.com/	timemag
US News	https://www.usnews.com/	usnews
One America News	https://oan.com	oan
Newsmax	https://newsmax.com	newsmax
InfoWars	https://infowars.com	infowars
Daily Wire	https://dailywire.com	dailywire
\.
