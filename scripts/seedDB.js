const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
	process.env.MONGODB_URI ||
	"mongodb://localhost/authentication"
);

const candidateSeed = [
	{
		name: "President Donald J. Trump",
		age: 73,
		party: "Republican",
		president_nominee: false,
		cur_position: "President of United States",
		yrs_served: 3,
		twitter: "realDonaldTrump",
		route_name: "donaldtrump2020",
		news_name: "donald trump",
		img_url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Donald_Trump_official_portrait_%28cropped%29.jpg",
		summary:
			[
				{
					bio: "Trump said that \"I alone can fix\" the system,[29] and pledged that if elected, \"Americanism, not globalism, will be our credo.\"[28] He described himself as a \"law and order\" candidate and \"the voice\" of \"the forgotten men and women.\"[30] Trump's inaugural address on January 20, 2017 focused on his campaign theme of America in crisis and decline.[31] He pledged to end what he referred to as \"American carnage,\"[32][33] depicting the United States in a dystopian light—as a \"land of abandoned factories, economic angst, rising crime\"—while pledging \"a new era in American politics.\". Trump's political positions are viewed by some as populist. Among academics, political writers, and pundits, Trump and his politics have been classified in greater detail, but in varying ways. Politicians and pundits alike have referred to Trump's populism, anti-free trade, and anti-immigrant stances as \"Trumpism\"",
					healthcare: "President Trump advocated repealing and replacing the Affordable Care Act (ACA or \"Obamacare\"). The Republican-controlled House passed the American Health Care Act (AHCA) in May 2017, handing it to the Senate, which decided to write its own version of the bill rather than voting on the AHCA.[204] The Senate bill, called the \"Better Care Reconciliation Act of 2017\" (BCRA), failed on a vote of 45-55 in the Senate during July 2017. Other variations also failed to gather the required support, facing unanimous Democratic Party opposition and some Republican opposition.[205] The Congressional Budget Office estimated that the bills would increase the number of uninsured by over 20 million persons, while reducing the budget deficit marginally.",
					climate: "Trump rejects the scientific consensus on climate change,[159][160][161] repeatedly contending that global warming is a \"hoax.\" By March 2016, Trump had not released any plans to combat climate change or provided details regarding his approach to energy issues more broadly.[155] In May 2016, Trump asked U.S. Representative Kevin Cramer, Republican of North Dakota—described by Reuters as \"one of America's most ardent drilling advocates and climate change skeptics\"—to draft Trump's energy policy",
					immigration: "Illegal immigration was a signature issue of Trump's presidential campaign, and his proposed reforms and controversial remarks about this issue have generated headlines.[5] Trump has also expressed support for a variety of \"limits on legal immigration and guest-worker visas,\"[5][249] including a \"pause\" on granting green cards, which Trump says will \"allow record immigration levels to subside to more moderate historical averages.\"",
					economy: "The economic policy positions of United States President Donald Trump prior to his election had elements from across the political spectrum.[16] However, once in office his actions indicated a politically rightward shift towards more conservative economic policies.One July 2018 study indicated Trump's policies have had little impact on the U.S. economy in terms of GDP or employment.[13] Analysis conducted by Bloomberg News at the end of Trump's second year in office found that his economy ranked sixth among the last seven presidents, based on fourteen metrics of economic activity and financial performance.[14] Through his first 28 months in office, Trump repeatedly and falsely characterized the economy during his presidency as the best in American history. ",
					foreign_policy: "[Needs revision] In a New York Times interview in July 2016, Presidential Nominee Trump \"repeatedly defined American global interests almost purely in economic terms,\" with the nation's \"roles as a peacekeeper, as a provider of a nuclear deterrent against adversaries like North Korea, as an advocate of human rights and as a guarantor of allies' borders\" being \"quickly reduced to questions of economic benefit to the United States.\"[1] A 68-page document likely written by and under the direction of the Trump administration's national security adviser, Lt. Gen. H.R. McMaster was released by the Trump administration in December 2017,[2] which has been referred to as outlining the administration's doctrine pertaining to foreign policy goals."
				}
			]

	},
	{
		name: "William F. Weld",
		age: 73,
		party: "Republican",
		president_nominee: false,
		cur_position: "Retired",
		yrs_served: 17,
		twitter: "GovBillWeld",
		route_name: "billweld2020",
		news_name: "bill weld",
		img_url: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Bill_Weld_campaign_portrait.jpg",
		summary:
			[
				{
					bio: "Libertarian Party vice presidential nominee (2016); Governor of Massachusetts (1991-1997); Assistant attorney general for US Criminal Division (1986-1988); United States Attorney for Massachusetts (1981-1986). Among respondents who identified as at least slightly conservative, 13% said, \"I would absolutely support a qualified candidate who challenged President Trump in the Republican primary,\" 11% said, \"I would probably support a qualified Republican candidate who challenged President Trump in the primary,\" and 18% said, \"I support the president, however I am open to other qualified Republican primary challengers.\"",
					healthcare: "Weld expanded Medicaid access while governor of Massachusetts.He also asked the federal government to boost funding to his state for Medicaid.",
					immigration: "During the 2016 election when Weld was the Libertarian Party's vice presidential nominee, he compared Trump's proposals for mass deportations to the practices of Nazi Germany. Weld wants broader access for visas and working permits.",
					climate: "Weld supports rejoining the Paris climate agreement, according to Boston.com.",
					economy: "Despite his more progressive social views, Weld is a traditional conservative when it comes to the economy, prioritizing cutting spending and cutting taxes.",
					foreign_policy: "Weld opposes countries being allowed to develop nuclear without proper oversight, calling proliferation \"the number one threat to the security of the world.\" He supported the Obama administration's Iran nuclear deal."
				}
			]

	},
	{
		name: "Joe Biden",
		age: 76,
		party: "Democrats",
		president_nominee: false,
		cur_position: "Retired",
		yrs_served: 44,
		twitter: "JoeBiden",
		route_name: "joebiden2020",
		news_name: "joe biden",
		img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Biden_2013.jpg/330px-Biden_2013.jpg",
		summary:
			[
				{
					bio: "Joe Biden served as the Vice President of the United States from 2009 to 2017. He served in the United States Senate from 1973 until 2009 and made his second run for President of the United States in the 2008 presidential election as a Democrat. Biden was announced as Democratic presidential nominee Barack Obama's running mate on August 23, 2008, and was elected Vice President on November 4, 2008. Biden has been a strong proponent of globalization throughout his career, while acknowledging it increases economic inequality.[2] He supported the 1993 North American Free Trade Agreement.[3] During the Obama Administration, Biden was a strong advocate for the Trans-Pacific Partnership. [4]",
					healthcare: "Biden has not endorsed Medicare for All but has announced support for a Public health insurance option that would allow Americans to buy into Medicare.[5][6][7]",
					immigration: "On September 29, 2006, Biden voted for the Secure Fence Act, which authorized and partially funded the construction of 700 miles of fencing along the Mexican border.[54][55] Biden supported the Comprehensive Immigration Reform Act of 2007. He supports guest-worker visas. Biden also supports a path to citizenship.[56]",
					climate: "Biden supports creating a new treaty on climate change requiring emissions reductions from developing countries, such as Brazil, India, China, and Mexico. He has also stated his support for investment in technologies to reduce greenhouse gas emissions, as well as creating a \"cap and trade\" system. Biden supports the promotion of renewable energy, including biodiesel fuels but not ethanol. On June 4, 2019, Joe Biden's campaign unveiled a climate policy plan aimed at getting the United States to eliminate net greenhouse gas emissions by 2050. Joe Biden also promised he'd re-enter the Paris Agreement on his first day in the White House.[43]",
					economy: "The middle class isn’t a number — it’s a set of values. Owning your home. Sending your kids to college. Being able to save and get ahead. Across the country, too many families are being left behind. The next president needs to understand what the current one doesn’t: In America, no matter where you start in life, there should be no limit to what you can achieve. We need to rebuild the middle class, and this time make sure everybody comes along — regardless of race, gender, religion, sexual orientation, or disability.",
					foreign_policy: "First and foremost, we must enforce existing trade laws and invest in the competitiveness of our workers and communities here at home, so that they compete on a level playing field. Then, we need to write the rules of the road for international trade through a modern, inclusive process—rules that protect our workers, safeguard the environment, uphold labor standards and middle-class wages, foster innovation, and take on big global challenges like corporate concentration, corruption, and climate change. If we don’t, other countries will write the rules for us."
				}
			]
	},
	{
		name: "Elizabeth Warren",
		age: 70,
		party: "Democrats",
		president_nominee: false,
		cur_position: "Senator of Massachusetts",
		yrs_served: 11,
		twitter: "SenWarren",
		route_name: "elizabethwarren2020",
		news_name: "elizabeth warren",
		img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Elizabeth_Warren%2C_official_portrait%2C_114th_Congress.jpg/330px-Elizabeth_Warren%2C_official_portrait%2C_114th_Congress.jpg",
		summary:
			[
				{
					bio: "Elizabeth Ann Warren is an American politician and former academic serving as the senior United States Senator from Massachusetts since 2013. Warren was formerly a law school professor specializing in bankruptcy law. A progressive, she has focused on consumer protection, economic opportunity, and the social safety net while in the Senate. In November 2012, Warren won the U.S. Senate election in Massachusetts, defeating incumbent Republican Scott Brown, to became the first female Senator from Massachusetts.",
					healthcare: "Warren was one of twenty-three Democratic senators to introduce the State Public Option Act, a bill that would authorize states to form a Medicaid buy-in program for all residents and thereby grant all denizens of the state the ability to buy into a state-driven Medicaid health insurance plan if they wished. Brian Schatz, a bill cosponsor, said the legislation would \"unlock each state’s Medicaid program to anyone who wants it, giving people a high-quality, low-cost public health insurance option\" and that its goal was \"to make sure that every single American has comprehensive health care coverage.\"[226]",
					immigration: "Immigrants are our neighbors and our friends. But an immigration system that can't tell the difference between a terrorist and a little girl is badly broken. That’s why today I’m announcing my plan for immigration reform -- to create a rules-based system that protects our security, grows our economy, and reflects our values.",
					climate: "Climate change is real, it’s man-made, and our government needs to take bold action and use all the tools available to combat it before it’s too late. Building on some of my earlier plans to address climate change, my new plan attacks it by using the power of public markets to accelerate the adoption of clean energy.",
					economy: "Warren believes that America has both a short-term and a long-term jobs problem.[citation needed] Warren notes that China spends 9% of its GDP on infrastructure, and Europe spends about 5% of GDP, while the US is spending only 2.4% and is looking for cuts.[3] She supports a small[quantify] tax increase on those making more than $1 million per year to pay for jobs such as rebuilding the roads, bridges, and water systems. She believes that the added money in circulation would help to build the economy as well.[3] Warren has a long record of working to assist self-employed workers and small businesses.[citation needed] She believes small business owners \"need straightforward rules that any small business can deal with\" rather than the present situation of \"complex regulations that take an army of lawyers to work through.\" Warren supports making it easier for workers to organize for better wages, for better health care, and for better working conditions.[3] ",
					foreign_policy: "For too long, our economic policies have left workers with the short end of the stick. We need to strengthen labor standards – and then fight to enforce them. That’s why Elizabeth will oppose Trump’s new \"NAFTA 2.0\" unless he produces a better deal for America’s working families. It’s time to stop prioritizing corporate profits over American paychecks. A strong military should act as a deterrent so that most of the time, we won’t have to use it. We must continue to be vigilant about the threat of terrorism, but it’s time to bring our troops home – and make sure they get support and benefits they’ve earned."
				}
			]
	},
	{
		name: "Pete Buttigieg",
		age: 37,
		party: "Democrats",
		president_nominee: false,
		cur_position: "Mayor of South Bend, Indiana",
		yrs_served: 6,
		twitter: "PeteButtigieg",
		route_name: "petebuttigieg2020",
		news_name: "pete buttigieg",
		img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Pete_Buttigieg_by_Gage_Skidmore.jpg/330px-Pete_Buttigieg_by_Gage_Skidmore.jpg",
		summary:
			[
				{
					bio: "Pete Buttigieg[1] (born January 19, 1982) is an American politician and former U.S. Naval Reserve officer who has served as mayor of South Bend, Indiana, since 2012. He is one of three combat veterans running for the Democratic Party nomination in the 2020 United States presidential election.[4]",
					healthcare: "Buttigieg advocated for a single-payer healthcare system from the start of his campaign.[105] He has clarified that he would not immediately jump to single-payer from the current system, preferring to implement an all-payer rate setting as a stopgap.[106]",
					immigration: "Buttigieg supports DACA and has drawn attention to the Trump administration’s aggressive deportation policies. He defended a resident of Granger, Indiana, who was deported after living in the U.S. for 17 years despite regularly checking in with ICE and applying for a green card.[107] Buttigieg has said that Trump has been reckless in sending American troops to the southern border and that it is a measure of last resort.[108]",
					climate: "Buttigieg favors renewed U.S. commitment to the Paris climate agreement.[86] He has also said that the government should start subsidizing solar panels to reduce emissions.[87] Buttigieg is a proponent of the Green New Deal proposed by House Democrats[88][89][90] He also supports a carbon tax and dividend policy for reducing greenhouse gas emissions.[91]",
					economy: "Buttigieg has frequently pointed to automation as the main cause of manufacturing job loss.[96] He has spoken of the need to work with labor unions.[97] He considers himself a democratic capitalist, rejecting crony capitalism and favoring a constitutional amendment to protect democracy from the undue influence of money in politics.[98] He is receptive to the possibility of antitrust actions against large technology companies but more focused on privacy and data security concerns.[99]",
					foreign_policy: "Buttigieg has said that he believes the post-9/11 action in Afghanistan was justified[99] but now supports withdrawing American troops there, but not from Syria.[86] Buttigieg is a committed supporter of Israel, breaking from the increasing trend in the Democratic Party to support Palestinians and the Palestinian cause.[102] However, he disapproves of Israeli Prime Minister Benjamin Netanyahu's zeal for annexing Jewish settlements in the West Bank.[103] In January 2019, following Juan Guaidó's self-declaration as interim President of Venezuela, Buttigieg told HuffPost that he supported free and fair elections and imposing sanctions on the country but opposed military intervention.[104]"
				}
			]
	},
	{
		name: "Beto O'Rourke",
		age: 46,
		party: "Democrats",
		president_nominee: false,
		cur_position: "U.S. House of Representatives from Texas's 16th district",
		yrs_served: 6,
		twitter: "BetoORourke",
		route_name: "betoorourke2020",
		news_name: "beto o Rourke",
		img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Beto_O%27Rourke%2C_Official_portrait%2C_113th_Congress.jpg/330px-Beto_O%27Rourke%2C_Official_portrait%2C_113th_Congress.jpg",
		summary:
			[
				{
					bio: "Beto O'Rourke (born September 26, 1972) is an American politician who represented Texas's 16th congressional district in the United States House of Representatives from 2013 to 2019. O'Rourke is seeking the Democratic nomination for President of the United States in 2020.",
					healthcare: "Beto O'Rourke has backed away from supporting Medicare for All, arguing that the plan would kick people off of private health insurance. Instead, O’Rourke supports a bill known as Medicare for America that would let people keep their employer-provided health insurance and automatically enroll the rest of the population into Medicare (i.e. newborns, the elderly, and the uninsured). The eventual goal would be that most people on private health insurance would opt for Medicare rather than their employer-provided private health insurance.",
					immigration: "O'Rourke favors comprehensive immigration reform.[198][199] As early as 2012, he asserted that his experience living on the border gave him \"a strong understanding of immigration's impact on our community\", calling El Paso \"an Ellis Island to Latin America for more than 150 years\", and spoke against 'militarizing' the border.[200] O'Rourke opposed Trump's decision to end Deferred Action for Childhood Arrivals (DACA), which granted temporary stay to some undocumented immigrants who were brought to the United States as minors.[201][202] O'Rourke said it is a \"top priority\" to protect DREAMers.[201] In October 2016, he gave a TEDx talk, titled The Border Makes America Great, about his views on immigration.[203] In an interview in February 2019, O'Rourke indicated he would tear down the wall between El Paso and the southern US border, since he feels that the fencing has forced migrants to the most inhospitable areas of the southern border, \"ensuring their suffering and death\".[204]",
					climate: "O'Rourke supports efforts to combat global warming. He has advocated putting a price on carbon emissions and wants to substantially increase the use of renewable energy. He has been a vocal critic of the Trump Administration's elimination of greenhouse gas regulations and the shrinking of the budget for environmental projects.[179] O'Rourke has introduced legislation to establish a national monument at Castner Range, near El Paso, and successfully included a provision in the National Defense Authorization Act to protect the area, which includes a historic military training facility.[179]",
					economy: "Beto’s ambitious plan for supporting small businesses will ensure a fair shot for minority and women owned businesses and bring more American entrepreneurs into the solutions facing our country and our economy.  These actions build off of his own career in small business and his work on the El Paso City Council and in Congress to expand access to investment and resources for entrepreneurs nationwide.",
					foreign_policy: "Our power rests in our unyielding commitment to our values and our leadership at home and abroad. And as the world creeps towards authoritarianism, we need to defend those values—now more than ever—not with unnecessary wars, but with bold leadership on the international stage. That means standing up against the rise of authoritarianism around the world and protecting our democracy from interference here at home; focusing on diplomacy, development, and defense, rather than supporting brutal campaigns like Saudi Arabia’s war on Yemen; restoring our relationships with our allies, instead of cozying up to dictators; and reestablishing our leadership of our own Hemisphere by investing in stability and peace in Central America—and combating hate crimes here at home."
				}
			]
	},
	{
		name: "Cory Booker",
		age: 50,
		party: "Democrats",
		president_nominee: false,
		cur_position: "Senator of New Jersey",
		yrs_served: 17,
		twitter: "SenBooker",
		route_name: "corybooker2020",
		news_name: "cory booker",
		img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Cory_Booker%2C_official_portrait%2C_114th_Congress.jpg/330px-Cory_Booker%2C_official_portrait%2C_114th_Congress.jpg",
		summary:
			[
				{
					bio: "Cory Booker (born April 27, 1969) is an American politician serving as the junior United States Senator from New Jersey since 2013 and a member of the Democratic Party. The first African-American U.S. Senator from New Jersey, he was previously the 36th Mayor of Newark from 2006 to 2013. Before that, Booker served on the Municipal Council of Newark for the Central Ward from 1998 to 2002. On February 1, 2019, he announced his campaign to run for the Democratic nomination for President of the United States in the 2020 United States presidential election.",
					healthcare: "Booker has called the Patient Protection and Affordable Care Act imperfect, said it needs to be improved, and wants to control health care costs.[8] He opposes cutting Medicare, he supports expanding the program,[67] and he supports transitioning to a \"Medicare-for-all\"-style single-payer healthcare system.[68] Booker was one of fifteen senators to introduce the Affordable Medications Act, legislation intended to promote transparency through mandating pharmaceutical companies disclose the amount of money going toward research and development in addition to both marketing and executives' salaries. The bill also abolished the restriction that stopped the federal Medicare program from using its buying power to negotiate lower drug prices for beneficiaries and hinder drug company monopoly practices used to keep prices high and disable less expensive generics entering the market.[73]",
					immigration: "Booker unveiled an immigration plan that centered on the use of executive power in directing the United States Department of Homeland Security mandate detention facilities abide by civil detention standards of the American Bar Association and end the use of for-profit detention facilities in addition to reducing the amount of time immigrants spent in detention centers and make immigrants receive better access to legal counsel. The plan would also reverse moves to eliminate protections for Dreamers and implement a Muslim travel ban by the Trump administration and \"expand pathways for refugees and those seeking asylum\" through barriers being removed ahead of the immigrants seeking asylum along with implementing an increase in both the cap on refugees and border staffing for interviewing those seeking asylum.[91]",
					climate: "Booker accepts the scientific consensus that climate change is man-made and supports cap-and-trade or carbon tax approach in dealing with greenhouse gas emissions.[8] Booker was one of forty-four senators to introduce the International Climate Accountability Act, legislation that would prevent President Trump from using funds in an attempt to withdraw from the Paris Agreement and directing the president's administration to instead develop a strategic plan for the United States that would allow it to meet its commitment under the Paris Agreement.[33]",
					economy: "Booker is in favor of creating so-called \"baby bonds\", whereby newborns would be given low-risk savings accounts (managed by the Treasury) that would be worth tens of thousands of dollars by the age of 18. According to an analysis by Naomi Zwede of the Center on Social Policy and poverty at Columbia University, the baby bonds almost entirely close the racial wealth gap among young people.[47]",
					foreign_policy: "Senator Booker has worked with colleagues on both sides of the aisle to boost American responses to violent extremism, particularly in the digital and social media space. Senator Booker introduced a bipartisan measure, the Countering Online Recruitment of Violent Extremists Act, to leverage existing Department of Homeland Security (DHS) resources to counter violent extremism online. Senator Booker also worked with Republican colleagues to co-author The Combat Terrorist Use of Social Media Act of 2016 which requires the president to prepare a report on terrorists' and terrorist organizations' use of social media and a comprehensive strategy to counter terrorists' and terrorist organizations' use of social media."
				}
			]
	},
	{
		name: "Andrew Yang",
		age: 44,
		party: "Democrats",
		president_nominee: false,
		cur_position: "Attorney",
		yrs_served: 0,
		twitter: "AndrewYang",
		route_name: "andrewyang2020",
		news_name: "andrew yang",
		img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Andrew_Yang_talking_about_urban_entrepreneurship_at_Techonomy_Conference_2015_in_Detroit%2C_MI_%28cropped%29.jpg/330px-Andrew_Yang_talking_about_urban_entrepreneurship_at_Techonomy_Conference_2015_in_Detroit%2C_MI_%28cropped%29.jpg",
		summary:
			[
				{
					bio: "Andrew Yang (born January 13, 1975)[1] is a U.S. 2020 Democratic presidential candidate, entrepreneur, attorney, and philanthropist. He is the founder of Venture for America (VFA), a non-profit that focuses on creating jobs in struggling American cities. Yang worked in startups and early stage growth companies as a founder or executive from 2000 to 2009. After founding Venture for America in 2011, the Obama administration selected him in 2012 as a \"Champion of Change\" and in 2015 as a \"Presidential Ambassador for Global Entrepreneurship\".",
					healthcare: "In addition to Universal Basic Income, support for single-payer healthcare is a fundamental aspect of Yang's platform.[65] Yang believes that such an approach will make holistic and preventive care more feasible. Yang's support for free healthcare goes beyond conventional physical care; for example, he supports free marriage counseling.[64] He has stated that the doctor shortage can be attributed to inadequate investment in patient care technology and an overemphasis on medical careers that require individuals to go through medical school.[71] Yang has proposed increasing funding for the suicide prevention efforts of the National Suicide Prevention Lifeline and the Department of Veterans Affairs.[citation needed] He supports the creation and funding of mindfulness programs in schools and correctional facilities.[72] He opposes circumcision and that history will show the intactivist movement to have been right. However, he would not try to ban the procedure and believes that the decision should ultimately be up to the parents, including for cultural or religious reasons.[73][74]",
					immigration: "Yang is a supporter of the DREAM Act, a bill that would protect migrants who entered the United States illegally as minors.[84] He would create a new category of residency that would allow certain undocumented migrants to gain citizenship after 18 years in the country.[84] He would implement new technology to increase the security of the Mexico–United States border as well as increase financial support for ports of entry.[84] Yang claims that immigrants are being scapegoated for the problem of job displacement through automation, stating that \"If you go to a factory here in Michigan, you will not find wall-to-wall immigrants, you will find wall to wall robots and machines\".[85]",
					climate: "Yang supports a Green New Deal and favors a reduction in carbon emissions with an emphasis on climate engineering. In addition to revitalizing the Environmental Protection Agency, his platform calls for a Global Geoengineering Institute to form inter-governmental partnerships. Yang is a proponent of a carbon tax and bringing the United States back into the Paris Climate Agreement.[75] Yang is a supporter of nuclear energy. He believes that the United States should invest more in nuclear technologies like thorium-based nuclear power and generation-IV nuclear reactors. He has also stated that he wants to make it easier for nuclear power plants to open up and wants to increase the amount of nuclear energy used in the United States.[76]",
					economy: "Yang's signature policy is a $1,000 per month \"Freedom Dividend\" to all U.S. citizens over the age of 18, which is a form of Universal Basic Income, as a response to ongoing job displacement through automation. His website states that \"Every U.S. citizen over the age of 18 would receive $1,000 a month, regardless of income or employment status, free and clear.\"[21][63] Yang proposes funding the dividend with a value-added tax, which Yang claims is necessary to combat tax avoidance by American technology companies that use accounting tricks to routinely pay little in income tax.[64][65] Yang claims the problem of job displacement through automation is the main reason Donald Trump ended up winning the 2016 presidential election, stating that based on data, \"There's a straight line up between the adoption of industrial robots in a community and the movement towards Donald Trump.\"[66] Yang believes Universal Basic Income is a more viable policy than job retraining programs, citing studies that job retraining of displaced manufacturing workers had success rates of 0–15%.[67] On the topic of whether the dividend should include the wealthiest citizens, Yang stated that it should be universalized \"so it's seen as a true right of citizenship, instead of a transfer from rich to poor.\"[64] Yang does not support raising the federal minimum wage, citing his belief that the Freedom Dividend renders a minimum wage less necessary.[68]",
					foreign_policy: "Yang supports American international alliances such as NATO.[84] He has pledged to return the power to declare war to Congress if elected.[84] He would also create a position for secretary of cybersecurity.[84]"
				}
			]
	},
	{
		name: "Julian Castro",
		age: 44,
		party: "Democrats",
		president_nominee: false,
		cur_position: "Presidential Candidate",
		yrs_served: 12,
		twitter: "JulianCastro",
		route_name: "juliancastro2020",
		news_name: "julian castro",
		img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Juli%C3%A1n_Castro%27s_Official_HUD_Portrait.jpg/330px-Juli%C3%A1n_Castro%27s_Official_HUD_Portrait.jpg",
		summary:
			[
				{
					bio: "Julián Castro (born September 16, 1974) is an American Democratic politician who was the youngest member of President Obama's Cabinet, serving as the 16th United States Secretary of Housing and Urban Development from 2014 to 2017. Castro served as the mayor of his native San Antonio, Texas from 2009 until he joined Obama's cabinet in 2014. He was mentioned as a possible running mate for Hillary Clinton during the 2016 presidential campaign.[2][3] Castro is the twin brother of Congressman Joaquin Castro. On January 12, 2019, Castro launched his campaign for the Democratic nomination for President of the United States in 2020 in San Antonio.[4]",
					healthcare: "Castro has called for universal health care and Medicare for All, and indicated he would consider funding such a program by raising taxes on corporations and the wealthy.[52] He has supported the Affordable Care Act.[54]",
					immigration: "Castro supports a pathway to citizenship for most undocumented residents of the US, has opposed President Trump's \"border \" plan, and has said that the U.S. Immigration and Customs Enforcement agency needs to be \"reconstituted\". Additionally, he asserted in the first Democratic primary candidate debates on June 26, 2019[62] that he would repeal Section 1325[63] [52] of Title 8 of the U.S. criminal code, which would decriminalize illegal entry into the U.S., rendering unlawful entry a civil offense instead of a criminal one.",
					climate: "Castro supports the Paris climate accord, and has criticized President Trump's withdrawal from the agreement. While in office, Castro worked with companies to promote their transition to renewable energy.[52] He has voiced support for a Green New Deal.[55] In the past, Castro has advocated for an \"energy policy that includes fossil fuels\"[51] while also \"pointing out the benefits of fossil fuel jobs\".[56]",
					economy: "Castro has pushed for economic equality and, as mayor of San Antonio, showed an ability to get along with Republicans and conservative-leaning business communities. Castro has attempted to put his liberal economic ideas into action. Like a number of Democratic candidates, Castro has said his campaign will not accept donations from corporate PACs. He has also pledged to pay interns $15 an hour and support a staff union.",
					foreign_policy: "Domestic policy rather than foreign policy has been Castro’s passion. He hasn’t made a habit of weighing in on Middle East policy, arms-control agreements, or trade deals. That makes it hard to say how his views might evolve in the months to come. He all but ignored foreign policy in his presidential announcement speech. He did say that \"The biggest threat to our prosperity in this 21st century is climate change.\" He vowed that \"as president, my first executive order will recommit the United States to the Paris climate accord.\" He also says he will push for a Green New Deal, a popular position with Democrats, though it’s unclear what it entails."
				}
			]
	},
	{
		name: "Tulsi Gabbard",
		age: 38,
		party: "Democrats",
		president_nominee: false,
		cur_position: "U.S. House of Representatives from Hawaii's 2nd district",
		yrs_served: 9,
		twitter: "TulsiGabbard",
		route_name: "tulsigabbard2020",
		news_name: "tulsi gabbard",
		img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tulsi_Gabbard%2C_official_portrait%2C_113th_Congress.jpg/330px-Tulsi_Gabbard%2C_official_portrait%2C_113th_Congress.jpg",
		summary:
			[
				{
					bio: "Tulsi Gabbard (April 12, 1981) is an American politician and military veteran serving as the U.S. Representative for Hawaii's 2nd congressional district since 2013. She is a member of the Democratic Party. First elected in 2012, she became the first Samoan American and the first Hindu member of the United States Congress. Gabbard is a candidate for the Democratic nomination for President of the United States in 2020.",
					healthcare: "Gabbard supports universal health care.[141][142] She co-sponsored a bill that would create a \"government-run system to provide health care for all residents of the United States\", in part paid for by hiking taxes on the wealthy and taxing financial transactions.[132]",
					immigration: "Gabbard has been described as out of step with other Democrats on immigration.[143][144] In 2015 she voted with Congressional Republicans in favor of a bill requiring \"extreme vetting\" of Syrian and Iraqi refugees. The Obama administration said the bill would effectively stop the resettlement of Syrian refugees in the United States.[145][146][147] That same year she called for a suspension of the visa waiver program for European passport holders.[148][149]",
					climate: "Gabbard supports the carbon neutrality goals of the Green New Deal and the awareness it has brought across the country on the critical issues of energy independence and the climate crisis, however, I do not support \"leaving the door open\" to nuclear power unless and until there is a permanent solution to the problem of nuclear waste. I believe we need to invest in 100% renewable and safe energy sources like wind, solar, and geothermal. I also support a ban on fracking, ending the $26 billion/year in fossil fuel subsidies, as well as all subsidies or waivers to the nuclear power industry, which should itself be completely responsible for paying for its own insurance and paying the long term cost for safe storage of nuclear waste over centuries. I will also work to provide other incentives for a renewable energy economy.",
					economy: "Tulsi Gabbard (D, HI-02) stood with Senator Bernie Sanders and Democratic leaders from the House and Senate to introduce the Raise the Wage Act today. The legislation would raise the minimum wage to $15 an hour by 2024 and index the minimum wage to the median wage growth thereafter. It has been 10 years since legislation was enacted increasing the federal minimum wage.  When adjusted for inflation, about 40 percent of today’s workers earn less than the minimum wage in 1968.  The Raise the Wage Act would give more than 41 million low-wage workers a raise, increasing the wages of almost 30 percent of the U.S. workforce. The federal minimum wage has fallen far behind inflation and has actually lost value over time, meaning working families are making less while paying more just to make ends meet. The federal minimum wage has stagnated for the last 10 years—it is long overdue for Congress to do the right thing for hard-working Americans and raise the minimum wage",
					foreign_policy: "Gabbard has described herself as both a hawk and a dove.[144] Asked if there were any wars that justified the use of US military force, Gabbard said there are \"very few examples\" and cited World War II.[185] Gabbard at the Tomb of the Unknown Soldier at Arlington National Cemetery in Virginia. In an 2018 interview with The Intercept, Gabbard said U.S. efforts at regime change \"have ended up worse off for the people of those countries and have been counterproductive to the interests of the American people.\" The Intercept described her as\"an outspoken critic of U.S. involvement in the Middle East; from the disastrous Iraq War to NATO’s 2011 intervention in Libya that followed Arab Spring protests against the brutal regime of Moammar Gadhafi.\"[186] She also opposed the NATO-led military intervention in Libya in 2011[186] and has called for an end to the nearly two-decades-long U.S. war in Afghanistan.[187]"
				}
			]
	},
	{
		name: "Sen. Bernie Sanders",
		age: 77,
		party: "Democrats",
		president_nominee: false,
		cur_position: "Senator of Vermont",
		yrs_served: 38,
		twitter: "BernieSanders",
		route_name: "berniesanders2020",
		news_name: "bernie sanders",
		img_url: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bernie_Sanders.jpg",
		summary:
			[
				{
					bio: "In an address on his political philosophy given at Georgetown University in November 2015, Sanders identified his conception of \"democratic socialism\" with Franklin D. Roosevelt's proposal for a Second Bill of Rights,[6][7] saying that democratic socialism means creating \"an economy that works for all, not just the very wealthy,\" reforming the political system (which Sanders says is \"grossly unfair\" and \"in many respects, corrupt\"), recognizing health care and education as rights, protecting the environment, and creating a \"vibrant democracy based on the principle of one person, one vote.\"[8] He explained that democratic socialism is not tied to Marxism or the abolition of capitalism but rather describes a program of extensive social benefits, funded by broad-based taxes.",
					healthcare: "Sanders is a staunch supporter of a universal health care system, and he has said, \"If you are serious about real healthcare reform, the only way to go is single-payer.\"[242] He advocates lowering the cost of drugs that are expensive because they remain under patent for years; some drugs costing thousands of dollars per year in the U.S. are available for hundreds, or less, in countries where they can be obtained as generics.",
					immigration: "Sanders believes a path to citizenship should be created for new immigrants.[294] He voted for the comprehensive immigration reform bill in 2013,[295] saying, \"It does not make a lot of sense to me to bring hundreds of thousands of [foreign] workers into this country to work for minimum wage and compete with American kids.\" Sanders opposes guest worker programs[296] and is also skeptical about skilled immigrant (H-1B) visas, saying, \"Last year, the top 10 employers of H-1B guest workers were all offshore outsourcing companies. These firms are responsible for shipping large numbers of American information technology jobs to India and other countries.\"",
					climate: "Sanders views global warming as a serious problem.[90] Along with Senator Barbara Boxer, Sanders introduced the Global Warming Pollution Reduction Act of 2007 on January 15, 2007.[91] In a July 26, 2012 speech on the Senate floor, Sanders addressed claims made by Senator Jim Inhofe: \"The bottom line is when Senator Inhofe says global warming is a hoax, he is just dead wrong, according to the vast majority of climate scientists.\"[92] He was Climate Hawks Vote's top-rated senator on climate leadership in the 113th Congress.",
					economy: "A cornerstone of Sanders's 2016 presidential campaign was to fight the increasing wealth inequality in the United States. In April 2015, Sanders articulated his position in an interview with The Guardian: What we have seen is that while the average person is working longer hours for lower wages, we have seen a huge increase in income and wealth inequality, which is now reaching obscene levels. This is a rigged economy, which works for the rich and the powerful, and is not working for ordinary Americans ... You know, this country just does not belong to a handful of billionaires.",
					"foreign_policy": "[needs revision] Mostly democrat stances."
				}
			]

	},
	{
		name: "Tom Steyer",
		age: 62,
		party: "Democrats",
		president_nominee: false,
		cur_position: "Philanthropist",
		yrs_served: 0,
		twitter: "TomSteyer",
		route_name: "tomsteyer2020",
		news_name: "tom steyer",
		img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Tom_Steyer_by_Gage_Skidmore.jpg/330px-Tom_Steyer_by_Gage_Skidmore.jpg",
		summary:
			[
				{
					bio: "Tom Steyer (born June 27, 1957) is an American billionaire hedge fund manager, philanthropist, environmentalist, liberal activist, and fundraiser.[2] He is a candidate in the 2020 Democratic Party presidential primaries.[3]",
					healthcare: "Steyer supports \"Medicare for All,\" which would effectively amount to a single-payer health insurance system and a de facto governmental takeover of health insurance and imposition of socialized medicine in America. He has been critical of the perceived corporate greed of large pharmaceutical companies.",
					immigration: "Steyer has been harshly critical of the Trump administration's attempts to secure our border amidst a hitherto unprecedented influx there of Central American migrants. Steyer donated last year to leftist/open-borders legal groups at the southern border working to assist illegal aliens facing deportation. He addresses illegal immigration in starkly pro-illegal alien — and not rule-of-law — terminology. Steyer appears to support a pathway to citizenship for much of America's illegal alien populace.",
					climate: "Steyer wants to put more resources toward clean, renewable energy and reduce America’s dependence on fossil fuels. After leaving Farallon Capital in 2012, Steyer created NextGen Climate Action (now NextGen America), a political action committee and advocacy group dedicated to combating climate change. Steyer started putting his money toward various environmental causes, such as setting up a $2 million relief fund for victims of extreme weather events. He also divested from coal projects as part of his focus on renewable energy. Steyer also lobbied then-President Barack Obama in 2013 to block construction of the Keystone XL oil pipeline, arguing that its negative impact on the environment would outweigh its potential economic benefits. Ultimately, Obama did not approve the project. Trump has since revived construction of the pipeline, which was approved by the state of Nebraska in November 2017 — a move that Steyer called “shortsighted and stupid.”",
					economy: "Steyer wants to limit the influence of corporations in politics and raise the minimum wage. In his campaign announcement, Steyer said he wanted to “take the corporate control out of politics,” adding that if corporations have an \"unlimited ability to participate in politics, it will skew everything because they only care about profits.\" Steyer supports raising the minimum wage, and lists “the right to a living wage” as one of the “5 Rights” all Americans should have. He previously put money toward a carbon tax proposal in the state of Oregon, but has said that talking about “jobs and health” is a more effective way of getting voters to take interest in climate issues.",
					foreign_policy: "Steyer has a thin track record on foreign policy, although he has been critical of President Trump's foreign policy approach. He has also taken the standard leftist approach to Special Counsel Bob Mueller's now-infamous report: Accusing President Trump of obstruction of justice."
				}
			]
	},
	{
		name: "Amy Klobuchar",
		age: 62,
		party: "Democrats",
		president_nominee: false,
		cur_position: "Senator of Minnesota",
		yrs_served: 20,
		twitter: "amyklobuchar",
		route_name: "amyklobuchar2020",
		news_name: "amy klobuchar",
		img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Amy_Klobuchar%2C_official_portrait%2C_113th_Congress.jpg/330px-Amy_Klobuchar%2C_official_portrait%2C_113th_Congress.jpg",
		summary:
			[
				{
					bio: "Amy Klobuchar (born May 25, 1960) is an American lawyer and politician serving as the senior United States Senator from Minnesota. A member of the Minnesota Democratic-Farmer-Labor Party, Minnesota's affiliate of the Democratic Party, she previously served as the Hennepin County Attorney.",
					healthcare: "Amy supports universal health care for all Americans, and she believes the quickest way to get there is through a public option that expands Medicare or Medicaid. She supports changes to the Affordable Care Act to help bring down costs to consumers including providing cost-sharing reductions, making it easier for states to put reinsurance in place, and continuing to implement delivery system reform. And she’s been fighting her whole life to bring down the cost of prescription drugs.",
					immigration: "Most undocumented immigrants would get a legal status and path to citizenship under plans Klobuchar has supported, including the 2013 immigration bill passed by the Senate. She has also said she would increase legal immigration, with a focus on increasing the number of temporary work visas available. Klobuchar would reform U.S. Immigration and Customs Enforcement, but would not abolish the agency.",
					climate: "Amy is deeply committed to tackling the climate crisis and believes that it is an urgent priority for our communities, for our economy and for our planet. She is a co-sponsor of a Green New Deal and has signed the No Fossil Fuel Money Pledge.  On day one of Amy’s presidency she will get us back into the International Climate Change Agreement. On day two and day three, she will bring back the clean power rules and gas mileage standards that the Obama Administration put into place.  And she will put forward sweeping legislation that provides a landmark investment in clean-energy jobs and infrastructure, provides incentives for tougher building codes, promotes rural renewable energy and development, and promotes “buy clean” policies.",
					economy: "Too many people aren’t sharing in our country’s economic prosperity. Shared prosperity is about ensuring all families have a fair shot in today’s economy, and Amy believes that this means investing in quality child care, overhauling our country’s housing policy, raising the minimum wage, providing paid family leave, supporting small business owners and entrepreneurs, as well as helping Americans save for retirement.",
					foreign_policy: "Klobuchar opposed President’s Donald Trump’s decision to withdraw troops from Syria. Earlier this month, Klobuchar highlighted her opposition by voting in favor of bipartisan legislation that rebuked Trump’s position. At the time of the vote, all the senators who had already announced they were running in 2020 or had declared their intention to run voted against the bill. Klobuchar also introduced the Honest Ads Act with former Arizona Sen. John McCain and Sen. Mark Warner, D-Va., in response to Russia’s meddling in the 2016 presidential election. The bill requires advertisement buys and publishers to publicly disclose information about the ad in order to ensure transparency and accountability."
				}
			]
	},
	{
		name: "John Delaney",
		age: 56,
		party: "Democrats",
		president_nominee: false,
		cur_position: "U.S. House of Representatives from Maryland's 6th district",
		yrs_served: 6,
		twitter: "JohnDelaney",
		route_name: "johndelaney2020",
		news_name: "john delaney",
		img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/John_Delaney_113th_Congress_official_photo.jpg/330px-John_Delaney_113th_Congress_official_photo.jpg",
		summary:
			[
				{
					bio: "John Delaney (born April 16, 1963) is an American attorney, businessman, and politician who is running for President of the United States in 2020. He was the United States Representative for Maryland's 6th congressional district from 2013 to 2019.[1] On July 28, 2017, Delaney became the first Democrat to announce he was running for president in 2020.[2] ",
					healthcare: "John Delaney believes health care is a fundamental right for all Americans. He is proposing the BetterCare Plan to create a real universal healthcare system to guarantee access, improve quality, lower costs and maintain choice. While Democratic presidential candidates support universal healthcare, there are multiple ways to achieve that goal. Delaney’s plan is the best option as it embraces a mixed model system to maximize choice for all Americans while ensuring every American has health insurance.",
					immigration: "Delaney believes accepting immigrants into the country greatly benefits Americans: helps reduce the deficit, boosts GDP, improves the solvency of social security, and enriches society; independent analysts have shown that immigration serves as a stimulus to the U.S. economy; immigrants are twice as likely to start a business as someone born here and immigrant-run businesses employ about one in ten American workers; and the more immigrants who are documented and pay taxes, the more money comes into our treasury to support programs like Social Security and Medicare. Delaney would negotiate a comprehensive immigration reform deal. Immigration reform needs to be accomplished with bipartisan support, such as the bipartisan deal that passed the Senate in 2013.",
					climate: "John Delaney is serious about tackling climate change. It’s a big problem and it requires big solutions, which is why Delaney is announcing his $4 trillion Climate Plan that is full of new ideas and innovative solutions. According to the IPCC, limiting global warming to 1.5°C will require achieving net zero emissions by 2050. We are already seeing the early effects of climate change, and that level of rapid emissions reductions is necessary to avoid the catastrophic consequences that would result from any further delay. The difference between the warming we have already experienced and the 2°C warming we could see if we don’t act now to reduce emissions is a greater risk of water scarcity, increased sea-level rise, greater damage to ecosystems and animal habitats, declines in human health, and the displacement of millions of people. In addition to the environmental effects, the Department of Defense has characterized climate change as a threat multiplier. Delaney’s plan will put us on the right track to reduce emissions in time to avoid the worst consequences of global warming. However, we need the international community to come together to combat global warming which is why Delaney would also rejoin the Paris Climate Agreement on Day 1 of his presidency.",
					economy: "Changes to our economy through technological innovation and globalization have delivered enormous prosperity, but the benefits have not been equally shared. Almost all of the increase in average household income over the past four decades has gone to the top 40% of earners, while families in the bottom 60% have seen average income stay flat or even decline. The benefits of our modern economy are strongest in certain geographic areas. 5 metro areas combine to receive more than 80% of venture capital investment while 16 states have more than 20% of their population living in economically distressed zip codes. To ensure that everyone has an opportunity to live the American Dream, John Delaney proposes making significant investments in the areas that have been left behind by globalization and providing the necessary resources to prepare for the future of work. Delaney’s plan will increase economic opportunity for all, prepare workers for the future, and help hardworking Americans get ahead. With smart policy, we can solve the challenges that globalization and technological advances have created and position ourselves to benefit from these enormous changes to our lives and to our economy.",
					foreign_policy: "Delaney has been critical of Trump's decision to withdraw the US from the Iranian nuclear deal. According to his past congressional campaign website, Delaney called for tough sanctions on Russia in response to their growing aggression. \"Delaney believes in strong sanctions against Russia in response to their regional aggression, as well as new initiatives to sell American natural gas to Europe as a way of breaking Russia's regional hegemony,\" his website read. Delaney's congressional campaign website also said the US \"should be focused on support for Israel and the maintenance of the bonds between our two nations.\""
				}
			]
	},
	{
		name: "Sen. Kamala Harris",
		age: 54,
		party: "Democrats",
		president_nominee: false,
		cur_position: "Senator of California",
		yrs_served: 8,
		twitter: "KamalaHarris",
		route_name: "kamalaharris2020",
		news_name: "kamala harris",
		img_url: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Senator_Harris_official_senate_portrait.jpg",
		summary:
			[
				{
					bio: "Sen. Kamala Harris (D-CA), a longtime prosecutor prior to joining Congress in 2016, has made history in every elected office she’s held. She’s the first black woman and the first Asian American woman to serve as a California senator, as the state’s attorney general, and as San Francisco’s district attorney. And in 2020, she would be the first black woman and the first Asian American woman to be a major party nominee if Democrats choose her as their presidential candidate. Harris’s candidacy — and identity — is one that speaks to the energy and growing diversity of the Democratic party: She’s a progressive woman of color who’s made advocacy for DREAMers, the fight for equal pay, and abortion rights core planks of her policy proposals. And she’s built an avid following among voters impressed with her pointed questioning of Trump nominees and officials like Supreme Court Justice Brett Kavanaugh and Attorney General William Barr from her perch on the Senate Judiciary Committee.",
					healthcare: "On August 30, 2017, Harris announced at a town hall in Oakland that she would co-sponsor fellow Senator Bernie Sanders' \"Medicare for All\" bill, supporting single-payer healthcare. In April 2018, Harris was one of ten senators to sponsor the Choose Medicare Act, an expanded public option for health insurance that also increased ObamaCare subsidies and rendered individuals with higher income levels eligible for its assistance. In December 2018, Harris was one of 42 senators to sign a letter to Trump administration officials Alex Azar, Seema Verma, and Steve Mnuchin arguing that the administration was improperly using Section 1332 of the Affordable Care Act to authorize states to \"increase health care costs for millions of consumers while weakening protections for individuals with pre-existing conditions.\" The senators requested the administration withdraw the policy and \"re-engage with stakeholders, states, and Congress.\"",
					immigration: "Immigration is also a policy area that Harris has been deeply engaged with during her time in the Senate. She has earned praise from a crucial contingent of immigration advocates, many of whom have heralded her willingness to stake out her unflinchingly aggressive opposition to the White House. Harris was the first senator to say that she wouldn’t vote for a spending package if Congress didn’t include protections for DREAMers (undocumented immigrants who came to the US as children), and before that, she spent time as attorney general confronting the child migrant crisis. She was also the first to call for Homeland Security Secretary Kirstjen Nielsen to resign in the wake of the Trump administration’s implementation of family separation policies. As a candidate, Harris has put forward a proposal that creatively uses executive action to help create a path to citizenship for DREAMers.",
					climate: "In September 2018, Harris was one of eight senators to sponsor the Climate Risk Disclosure Act, a bill described by cosponsor Elizabeth Warren as using \"market forces to speed up the transition from fossil fuels to cleaner energy – reducing the odds of an environmental and financial disaster without spending a dime of taxpayer money.\"[206] She stated that her goal would be achieving 100% of U.S. electricity from renewable energy sources, and that she supports a Green New Deal, an idea made popular by first term Congresswoman Alexandria Ocasio-Cortez, because \"climate change is an existential threat to all of us.\"",
					economy: "Harris has called for closing the pay gap between teachers and other professions with comparable training, closing the gender wage gap and penalizing companies that don’t do so, and closing the pay gap between public defenders and prosecutors. Two of her other proposals would seek to provide workers with additional financial support. The LIFT the Middle Class Act would give middle-class households a monthly cash payment amounting to as much as $3,000 per year for single people and $6,000 per year for married couples. And a Harris bill focused on job training would give unemployed and underemployed workers up to $8,000 for training programs.",
					foreign_policy: "In 2017, Harris gave a public address to AIPAC attendees. She said: \"I believe Israel should never be a partisan issue, and as long as I'm a United States senator, I will do everything in my power to ensure broad and bipartisan support for Israel's security and right to self-defense.\"[210] She has opposed the Boycott, Divestment and Sanctions movement targeting Israel.[211] She was a co-sponsor of a Senate resolution expressing objection to the UN Security Council Resolution 2334, which condemned Israeli settlement building in the occupied Palestinian territories as a violation of international law.[212][213][211] At the AIPAC conference, she said that \"the first resolution I co-sponsored as a United States senator was to combat anti-Israel bias at the United Nations\".[212] She also supported a Senate resolution celebrating the 50th anniversary of the reunification of Jerusalem.[214][215] In late 2017, she traveled to Israel, where she met with Israeli Prime Minister Benjamin Netanyahu. Harris supported the Iran nuclear deal to prevent Iran from acquiring weapons of mass destruction.[211] In December 2018, after Secretary of State Mike Pompeo announced the Trump administration was suspending its obligations in the Intermediate-Range Nuclear Forces Treaty in 60 days in the event that Russia continued to violate the treaty, she was one of 26 senators to sign a letter expressing concern over the administration \"now abandoning generations of bipartisan U.S. leadership around the paired goals of reducing the global role and number of nuclear weapons and ensuring strategic stability with America's nuclear-armed adversaries\" and calling on Trump to continue arms negotiations."
				}
			]

	}
];

db.Candidate
	.remove({})
	.then(() => db.Candidate.collection.insertMany(candidateSeed))
	.then(data => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
