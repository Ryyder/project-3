const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactcandidates"
);

const candidateSeed = [
  {
		name: "President Donald J. Trump",
		age: 73,
		party: "Republican",
		president_nominee: false,
		cur_position: "President of United States",
		yrs_served: 3,
		summary:
			[
				{
					bio:  "Trump said that \"I alone can fix\" the system,[29] and pledged that if elected, \"Americanism, not globalism, will be our credo.\"[28] He described himself as a \"law and order\" candidate and \"the voice\" of \"the forgotten men and women.\"[30] Trump's inaugural address on January 20, 2017 focused on his campaign theme of America in crisis and decline.[31] He pledged to end what he referred to as \"American carnage,\"[32][33] depicting the United States in a dystopian light—as a \"land of abandoned factories, economic angst, rising crime\"—while pledging \"a new era in American politics.\". Trump's political positions are viewed by some as populist. Among academics, political writers, and pundits, Trump and his politics have been classified in greater detail, but in varying ways. Politicians and pundits alike have referred to Trump's populism, anti-free trade, and anti-immigrant stances as \"Trumpism\"'",
					healthcare: "'President Trump advocated repealing and replacing the Affordable Care Act (ACA or \"Obamacare\"). The Republican-controlled House passed the American Health Care Act (AHCA) in May 2017, handing it to the Senate, which decided to write its own version of the bill rather than voting on the AHCA.[204] The Senate bill, called the \"Better Care Reconciliation Act of 2017\" (BCRA), failed on a vote of 45-55 in the Senate during July 2017. Other variations also failed to gather the required support, facing unanimous Democratic Party opposition and some Republican opposition.[205] The Congressional Budget Office estimated that the bills would increase the number of uninsured by over 20 million persons, while reducing the budget deficit marginally.'",
					climate: "'Trump rejects the scientific consensus on climate change,[159][160][161] repeatedly contending that global warming is a \"hoax.\" By March 2016, Trump had not released any plans to combat climate change or provided details regarding his approach to energy issues more broadly.[155] In May 2016, Trump asked U.S. Representative Kevin Cramer, Republican of North Dakota—described by Reuters as \"one of America's most ardent drilling advocates and climate change skeptics\"—to draft Trump's energy policy'",
					immigration: "'Illegal immigration was a signature issue of Trump's presidential campaign, and his proposed reforms and controversial remarks about this issue have generated headlines.[5] Trump has also expressed support for a variety of \"limits on legal immigration and guest-worker visas,\"[5][249] including a \"pause\" on granting green cards, which Trump says will \"allow record immigration levels to subside to more moderate historical averages.\"'",
					economy: "'The economic policy positions of United States President Donald Trump prior to his election had elements from across the political spectrum.[16] However, once in office his actions indicated a politically rightward shift towards more conservative economic policies.One July 2018 study indicated Trump's policies have had little impact on the U.S. economy in terms of GDP or employment.[13] Analysis conducted by Bloomberg News at the end of Trump's second year in office found that his economy ranked sixth among the last seven presidents, based on fourteen metrics of economic activity and financial performance.[14] Through his first 28 months in office, Trump repeatedly and falsely characterized the economy during his presidency as the best in American history.' ",
					foreign_policy: "'[Needs revision] In a New York Times interview in July 2016, Presidential Nominee Trump \"repeatedly defined American global interests almost purely in economic terms,\" with the nation's \"roles as a peacekeeper, as a provider of a nuclear deterrent against adversaries like North Korea, as an advocate of human rights and as a guarantor of allies' borders\" being \"quickly reduced to questions of economic benefit to the United States.\"[1] A 68-page document likely written by and under the direction of the Trump administration's national security adviser, Lt. Gen. H.R. McMaster was released by the Trump administration in December 2017,[2] which has been referred to as outlining the administration's doctrine pertaining to foreign policy goals.'"
				}
			]
		
	},
	{
		name: "William F. Weld",
		age:  73,
		party: "Republican",
		president_nominee: false,
		cur_position: "Retired" ,
		yrs_served:  17,
		summary:
			[
				{
					bio: "'Libertarian Party vice presidential nominee (2016); Governor of Massachusetts (1991-1997); Assistant attorney general for US Criminal Division (1986-1988); United States Attorney for Massachusetts (1981-1986). Among respondents who identified as at least slightly conservative, 13% said, \"I would absolutely support a qualified candidate who challenged President Trump in the Republican primary,\" 11% said, \"I would probably support a qualified Republican candidate who challenged President Trump in the primary,\" and 18% said, \"I support the president, however I am open to other qualified Republican primary challengers.\"'",
					healthcare: "'Weld expanded Medicaid access while governor of Massachusetts.He also asked the federal government to boost funding to his state for Medicaid.'",
					immigration: "'During the 2016 election when Weld was the Libertarian Party's vice presidential nominee, he compared Trump's proposals for mass deportations to the practices of Nazi Germany. Weld wants broader access for visas and working permits.'",
					climate: "'Weld supports rejoining the Paris climate agreement, according to Boston.com.'",
					"economy": "'Despite his more progressive social views, Weld is a traditional conservative when it comes to the economy, prioritizing cutting spending and cutting taxes.'",
					foreign_policy: "'Weld opposes countries being allowed to develop nuclear without proper oversight, calling proliferation \"the number one threat to the security of the world.\" He supported the Obama administration's Iran nuclear deal.'"
				}
			]
		
	},
	{
		name: "Sen. Bernie Sanders",
		age:  77,
		party: "Democrats", 
		president_nominee: false,
		cur_position: "Senator of Vermont",
		yrs_served: 38,
		summary:
			[
				{
					bio: "'In an address on his political philosophy given at Georgetown University in November 2015, Sanders identified his conception of \"democratic socialism\" with Franklin D. Roosevelt's proposal for a Second Bill of Rights,[6][7] saying that democratic socialism means creating \"an economy that works for all, not just the very wealthy,\" reforming the political system (which Sanders says is \"grossly unfair\" and \"in many respects, corrupt\"), recognizing health care and education as rights, protecting the environment, and creating a \"vibrant democracy based on the principle of one person, one vote.\"[8] He explained that democratic socialism is not tied to Marxism or the abolition of capitalism but rather describes a program of extensive social benefits, funded by broad-based taxes.'",
					healthcare: "'Sanders is a staunch supporter of a universal health care system, and he has said, \"If you are serious about real healthcare reform, the only way to go is single-payer.\"[242] He advocates lowering the cost of drugs that are expensive because they remain under patent for years; some drugs costing thousands of dollars per year in the U.S. are available for hundreds, or less, in countries where they can be obtained as generics.'",
					immigration: "'Sanders believes a path to citizenship should be created for new immigrants.[294] He voted for the comprehensive immigration reform bill in 2013,[295] saying, \"It does not make a lot of sense to me to bring hundreds of thousands of [foreign] workers into this country to work for minimum wage and compete with American kids.\" Sanders opposes guest worker programs[296] and is also skeptical about skilled immigrant (H-1B) visas, saying, \"Last year, the top 10 employers of H-1B guest workers were all offshore outsourcing companies. These firms are responsible for shipping large numbers of American information technology jobs to India and other countries.\"'",
					climate: "'Sanders views global warming as a serious problem.[90] Along with Senator Barbara Boxer, Sanders introduced the Global Warming Pollution Reduction Act of 2007 on January 15, 2007.[91] In a July 26, 2012 speech on the Senate floor, Sanders addressed claims made by Senator Jim Inhofe: \"The bottom line is when Senator Inhofe says global warming is a hoax, he is just dead wrong, according to the vast majority of climate scientists.\"[92] He was Climate Hawks Vote's top-rated senator on climate leadership in the 113th Congress.'",
					economy: "'A cornerstone of Sanders's 2016 presidential campaign was to fight the increasing wealth inequality in the United States. In April 2015, Sanders articulated his position in an interview with The Guardian: What we have seen is that while the average person is working longer hours for lower wages, we have seen a huge increase in income and wealth inequality, which is now reaching obscene levels. This is a rigged economy, which works for the rich and the powerful, and is not working for ordinary Americans ... You know, this country just does not belong to a handful of billionaires.'",
					"foreign_policy": "'[needs revision] Mostly democrat stances.'"
				}
			]
		
	},
	{
		name: "Sen. Kamala Harris",
		age: 54,
		party: "Democrats" ,
		president_nominee: false,
		cur_position: "Senator of California",
		yrs_served: 8,
		summary:
			[
				{
					bio: "'Sen. Kamala Harris (D-CA), a longtime prosecutor prior to joining Congress in 2016, has made history in every elected office she’s held. She’s the first black woman and the first Asian American woman to serve as a California senator, as the state’s attorney general, and as San Francisco’s district attorney. And in 2020, she would be the first black woman and the first Asian American woman to be a major party nominee if Democrats choose her as their presidential candidate. Harris’s candidacy — and identity — is one that speaks to the energy and growing diversity of the Democratic party: She’s a progressive woman of color who’s made advocacy for DREAMers, the fight for equal pay, and abortion rights core planks of her policy proposals. And she’s built an avid following among voters impressed with her pointed questioning of Trump nominees and officials like Supreme Court Justice Brett Kavanaugh and Attorney General William Barr from her perch on the Senate Judiciary Committee.'",
					healthcare: "'On August 30, 2017, Harris announced at a town hall in Oakland that she would co-sponsor fellow Senator Bernie Sanders' \"Medicare for All\" bill, supporting single-payer healthcare. In April 2018, Harris was one of ten senators to sponsor the Choose Medicare Act, an expanded public option for health insurance that also increased ObamaCare subsidies and rendered individuals with higher income levels eligible for its assistance. In December 2018, Harris was one of 42 senators to sign a letter to Trump administration officials Alex Azar, Seema Verma, and Steve Mnuchin arguing that the administration was improperly using Section 1332 of the Affordable Care Act to authorize states to \"increase health care costs for millions of consumers while weakening protections for individuals with pre-existing conditions.\" The senators requested the administration withdraw the policy and \"re-engage with stakeholders, states, and Congress.\"'",
					immigration: "'Immigration is also a policy area that Harris has been deeply engaged with during her time in the Senate. She has earned praise from a crucial contingent of immigration advocates, many of whom have heralded her willingness to stake out her unflinchingly aggressive opposition to the White House. Harris was the first senator to say that she wouldn’t vote for a spending package if Congress didn’t include protections for DREAMers (undocumented immigrants who came to the US as children), and before that, she spent time as attorney general confronting the child migrant crisis. She was also the first to call for Homeland Security Secretary Kirstjen Nielsen to resign in the wake of the Trump administration’s implementation of family separation policies. As a candidate, Harris has put forward a proposal that creatively uses executive action to help create a path to citizenship for DREAMers.'",
					climate: "'In September 2018, Harris was one of eight senators to sponsor the Climate Risk Disclosure Act, a bill described by cosponsor Elizabeth Warren as using \"market forces to speed up the transition from fossil fuels to cleaner energy – reducing the odds of an environmental and financial disaster without spending a dime of taxpayer money.\"[206] She stated that her goal would be achieving 100% of U.S. electricity from renewable energy sources, and that she supports a Green New Deal, an idea made popular by first term Congresswoman Alexandria Ocasio-Cortez, because \"climate change is an existential threat to all of us.\"'",
					economy: "'Harris has called for closing the pay gap between teachers and other professions with comparable training, closing the gender wage gap and penalizing companies that don’t do so, and closing the pay gap between public defenders and prosecutors. Two of her other proposals would seek to provide workers with additional financial support. The LIFT the Middle Class Act would give middle-class households a monthly cash payment amounting to as much as $3,000 per year for single people and $6,000 per year for married couples. And a Harris bill focused on job training would give unemployed and underemployed workers up to $8,000 for training programs.'",
					foreign_policy: "'In 2017, Harris gave a public address to AIPAC attendees. She said: \"I believe Israel should never be a partisan issue, and as long as I'm a United States senator, I will do everything in my power to ensure broad and bipartisan support for Israel's security and right to self-defense.\"[210] She has opposed the Boycott, Divestment and Sanctions movement targeting Israel.[211] She was a co-sponsor of a Senate resolution expressing objection to the UN Security Council Resolution 2334, which condemned Israeli settlement building in the occupied Palestinian territories as a violation of international law.[212][213][211] At the AIPAC conference, she said that \"the first resolution I co-sponsored as a United States senator was to combat anti-Israel bias at the United Nations\".[212] She also supported a Senate resolution celebrating the 50th anniversary of the reunification of Jerusalem.[214][215] In late 2017, she traveled to Israel, where she met with Israeli Prime Minister Benjamin Netanyahu. Harris supported the Iran nuclear deal to prevent Iran from acquiring weapons of mass destruction.[211] In December 2018, after Secretary of State Mike Pompeo announced the Trump administration was suspending its obligations in the Intermediate-Range Nuclear Forces Treaty in 60 days in the event that Russia continued to violate the treaty, she was one of 26 senators to sign a letter expressing concern over the administration \"now abandoning generations of bipartisan U.S. leadership around the paired goals of reducing the global role and number of nuclear weapons and ensuring strategic stability with America's nuclear-armed adversaries\" and calling on Trump to continue arms negotiations.'"
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
