<template lang="html">
    <section id="stories">
        <div class="container">
            <h1 class="text-center mb-3">Stories</h1>
            <div class="row">
                <div v-for="story in stories" class="story col-12">
                    <p v-for="part in story.parts">{{ part }}</p>
                    <blockquote>
                        - {{ story.author }}
                        <blockquote class="mt-0 ml-2">
                            <small><em>{{ story.relationship }}</em></small>
                        </blockquote>
                    </blockquote>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
'use strict';

export default {
    name: 'Stories',
    data() {
        return {
            stories: [
                {
                    author: 'Andrew Ritger',
                    relationship: 'Coworker',
                    parts: [
                        'Bausten taught me how to forgive myself for my past errors. He taught me mindfulness, and how to live in the present. To not fear the future, and to not remain in the past. He introduced me to UCO, and gave me the first tour of the school. Which led to me transferring there and has changed my life. He taught me introspection. Which has allowed me to take control of my life. I will always be thankful for Bausten and his short life. I did not know him for a long time, but he had a tremendous impact on my life.'
                    ]
                },
                {
                    author: 'Caleb Deane',
                    relationship: 'Friend',
                    parts: [
                        'I am struggling writing this post, mainly because I have so many things I want to say to him but just can\'t get them out right now. Some of us had the opportunity to share certain parts of our lives with him, which I am very grateful for.',
                        'I was lucky enough to be his best friend through most of our middle school years, which helped me everyday dealing with being bullied. He had such a strong soul, and outgoing personality and he also knew the right thing to do no matter the circumstance or argument, and I admired him for that through and through. The one thing I remember most from our childhood is that we would play Runescape together for hours on end in the same room feet apart from each other. (Which my mom allowed no matter the day or time, thanks Donnesa Deane) I also remember going to the overnight lock ins at Laser Quest with him, where we would eat pizza and drink endless amounts of Mountain Dew straight out of the bottle. Never will I forget all of the countless memories that we shared together, I always felt like he was like a brother to me and I wouldn\'t trade that for the world.',
                        'I just wanted to thank you for being such a great friend to me and a even better brother. You will always hold a special place in my heart, love you forever Buddy!'
                    ]
                },
                {
                    author: 'Eli Hooks',
                    relationship: 'Cousin',
                    parts: [
                        'I remember back when Noah, Bausten, and I were kids, Bausten had come over to spend the night. The only part of the evening I recall was when we had gone back to my room to go to sleep. Noah, being the stubborn child he was, demanded he sleep on a pallet at the foot of the two beds Bausten and I were on. Bausten and I were simply trying to sleep, but for whatever reason noah couldn\’t help but continuously pester Bausten by tickling his feet. He was warned to stop once, twice, thrice or else he would have to sleep in moms room. Noah, the troubled child he was, couldn\’t help but think it hilarious each time mom left the room and he would slip his hand under the covers and tickle Bausten\’s feet, infuriating mom even further. Finally, she had it. It was time for noah to come sleep in moms room because He unfortunately could not follow the rles of sleep overs. She grabbed noah by his ankles and began to drag him over to her room. Just as he was passing into the hallway, his little fingers clutched tightly onto the doorway. He was bawling, begging her to give him one last chance. However, the last straw had already been pulled. Bausten and I were laughing hysterically at the sight of my mother dragging noah out by his ankles as he screamed, kicked, and pleaded to stay at our feet for the night.'
                    ]
                },
                {
                    author: 'Noah Hooks',
                    relationship: 'Cousin',
                    parts: [
                        'Bausten was always one of my favorite people to see. He brought me light in the cloudiest of days, especially when I was younger. I used to love rubbing his ears because they were so cold and I felt safe with him, I’m pretty sure he hated when I did it but regardless he would let me do it day and night if I asked. This just goes to show his character even at such a young age. He didn’t care how much I inconvenienced him, he loved me all the same and I’m almost positive he had accepted that I loved him just for his ears. Bausten was not just a great cousin, but he was a great person that brightened the lives of everyone around him.'
                    ]
                },
                {
                    author: 'Jaryn (Jech) Rogers',
                    relationship: 'Cousin',
                    parts: [
                        'My sister and I, as the oldest and therefore leaders of the grand kid tribe, felt it was our obligation to direct the Annual Jech Cousins Skit. Formal as it was in our Nanny and Pop\'s basement, we made it our mission to ensure each grand kid had a part in the play. With Lacey as as our stage director, the 7 of us would huddle down in the basement practicing for what seemed like hours until all the lines were memorized.',
                        'On the other side of our fairly small cousin age gap, were our youngest two: Bausten and Tyler. While I\'m certain there was definitely some wrangling involved, Bausten participated in every part he was assigned. From the reindeer to an elf and even probably a few years as an angel, he so graciously let us dress him up in whatever role we needed filled.',
                        'I\'m reminded this week as I\'m going through photo albums, how special it was to have a tribe in my cousins. You can\'t turn a page of any of our albums without seeing a picture of all of us together. Fun was always the name of the game. It\'s not lost on me that how we grew up, together, was incredibly unique. With a santa hat, antlers, or dressed as a cheerleader, I\'ll forever have Bossy Bear in my most special memories.'
                    ]
                },
                {
                    author: 'Vladislav Volkov',
                    relationship: 'Friend',
                    parts: [
                        'I first met him my freshman year, I was 18 and he was 19 at the time. First time I saw him, he was riding down campus on his longboard, shirtless, flexing his muscles. I thought he was a total douchebag (which he kinda was at the time) and didn’t like him. Only about a year after we became to know each other more and became friends.',
                        'Over the years of living with the guy, I got to witness many stages he went through. You know, the guy would go from one passion to another, submerging completely in one and then jumping over to another one. When I first met him, he was all about hitting the gym and working his muscles. Then, there was a period when he was totally into gaming, for several months straight I saw him sitting on the couch and playing PS4. Then he got seriously in buddhism and meditation. First thing I\’d see getting out of my room in the morning would be Bausten meditating on the couch. It was funny, when my mom, who did yoga for a while, came to visit and pointed out to Bausten that he is actually not sitting right when he is meditating and showed him how he needs to keep his back straight, he was very surprised:”but, but it\’s not comfortable to sit like that!” - he said. Well, that\’s the whole point. Like any other period, meditation was over and Bausten has decided to become a florist. Definitely one of his more weird passions. For a few solid months he was all about plants. He\’d grow them outside, inside, anywhere he could. around the same time he decided to be a vegetarian, although he\’d still happily eat meat, if it was meant to go to waste (tricky tactic, hehe). He also decided not to hurt any creatures, even pesky ants, who we had an infestation of in our kitchen. Hence, everytime, he’d call me up or one of our other friends to deal with the ants, coz he was afraid to hurt them.',
                        'Afterwards Bausten has moved up to another passion of his - tennis. He\’d play any time he would get a chance. He started shopping for professional rackets online. He even bought an expensive used machine to put strings on rackets. He was claiming it\’s a great investment, but I don\’t think he\’s ever actually used it.',
                        'Shortly after one other passion of his emerged: craft beer and vaping. He was all about degustating various beers and hand making coils for his vapes.',
                        'One of his last big passions was cooking. He could spend the whole day slow cooking meat on coals in the back yard. He would look for recipes online and cook various things, even if there was no need for it, even if it’s wasn’t worth the time and effort - he simply ejoyed the process. Although he was always against killing creatures, that didn’t stop him from cooking and eating tons of deer meat prepared by pops. He sure loved that meat.',
                        'Last day I saw Bausten, we were at the gym, he was helping me to start working out. I remember his motivational speech: “I may not have succeeded in many things in life, but one thing I know well is how to work out” – we both laughed at it.',
                        'Bausten was a great friend, more than that, he was like a brother to me. We are will forever miss him.'
                    ]
                },
                {
                    author: 'Teri Martin',
                    relationship: 'Aunt',
                    parts: [
                        'A few years ago my parents planned a vacation to Red River with Bausten, Noah and I. In the end no one was able to make the trip except Bausten and I. So we loaded up my car and off we went. I\'d love to say the drive over was fun and eventful, except that Bausten "napped" the first 7 (out of 8 1/2 hour) drive. Lo and behold he woke up when we hit the beautiful mountains. We spent many days there exploring the area. One day we hiked up part of a mountain, which he loved as he has always appreciated nature more than anyone I\'ve ever known. Another day we went white water rafting. Halfway down the trip he decided to take a plunge in the icy cold water and floated in it the rest of the way back-which he just loved! We also drank plenty of beer at the local bar and just had the very best time together on our journey. I should note that the ride home was about as fun and exciting as the drive out there as he managed to "nap" most of the way back.',
                        'Another set of memories I have is Bausten the time he spent as my next door neighbor as he went through college. He spent many nights with us eating dinner, he would come would come over many times a week to say hi, grab a snack, or even to borrow things, a lot of things. I should mention that every single thing Bausten borrowed was either never returned or it was returned broken....100% of the time. Yet I continued to loan him whatever he asked for as I knew he needed it. I\'ll never forget the terrible time when Noah was in an awful wreck and I was no where close to be able to get him. Bausten didn\'t bat an eye when i asked for him to venture to get him and keep him safe until i could get there. Finally, many times when our family needed to leave town Bausten always had time to house sit. Every single time I tried to pay him he would always say "no thank you Aunt Teri, that is just what family is for."'
                    ]
                },
                {
                    author: 'Joyce Bowman',
                    relationship: 'Godmother',
                    parts: [
                        'He was such a bundle of love from the very first time I ever held him.  I am so thankful he was able to come and help me and take care of Uncle Dave.'
                    ]
                },
                {
                    author: 'Mark Owens',
                    relationship: 'Stepdad',
                    parts: [
                        'Bausten was hooked on Reddit. If I asked him if he knew about something he would always offer to get on Reddit and post the question.',
                        'He was always offering to help me get into an exercise program. Had many options and was politely letting me know I would be better, feel better if I exercised.',
                        'We did joke about his elbow issues. Tennis elbow. He could not take out the trash because he did not want to strain his elbow.',
                        'Bausten and I had many deep conversations on life, Religion, and Spirituality. He was always wanting to share his experience with me. These times I will always cherish. He would send me links and give me books.',
                        'We did stop sharing on social issues around politics. Only time we made each other irritated. He always wanted to help. Very sharing. He was an intelligent young man.'
                    ]
                },
                {
                    author: 'Stephen Whitener',
                    relationship: 'Supervisor',
                    parts: [
                        'But in my 10 plus years working in this field, I never, ever worked with anyone so devoted to his job as Bausten Jech.  He was great, a natural, and I loved the way he never immediatly answered a question, rather he thought about what he wanted to say before he said it.  In the 15 months we worked together, he may have made 2 errors.  He was a friend to the entire staff. He never called in sick. He drove from Guthrie to OKC and he was rarely late.  I am a better person because I worked with and was friends with Bausten.',
                        'Bausten was so meticulous in how he did things, a perfectionist really.  He always challenged me and teased me if I messed up a medication count or did not sign off that I had administered a medication.  So this last Thanksgiving when we had our annual Thanksgiving bash for our guys and their families, he was given the task of making the deviled eggs.  He seemed ok with it.  So one of our guys, Michael and I went grocerey shopping, and Bausten and Raymond stayed behind to make the deviled eggs.  He called us as we were leaving the store, telling me in the most serious voice, "Stephen, I googled how to make deviled eggs" and I just got hysterical.  Then we got back from the store, the kitchen was a disaster, he had every bowl out, thermometers in the eggs to make sure they were at the right temperature  and it looked like a scientific laboratory but 8 hours later he finished the 2 plates of deviled eggs.',
                        'If I could share one more story about Bausten that I just heard yesterday, is that the two vocational girls who both work in the house and aide the guys at work, they were wondering, how Michael Bryant (one of the guys he worked with and helped) was getting all calls for job interviews at great companies. Come to find out it was because Bausten wrote Michael’s resume. He was “one of a kind!”'
                    ]
                },
                {
                    author: 'Caleb Parham',
                    relationship: 'Friend',
                    parts: [
                        'One time I was over at his apartment visiting him and Satnam. I noticed a cage in the corner and the living room and asked "did y\'all get a hamster?" Bausten said no we got a rabbit! I said wow, but where is it! Bausten looks at the cage, looks at me, looks back at the cage, then says ohh shit. We looked for that rabbit for a solid 30 minutes!! That crazy little animal found it\'s way into a cabinet and I gave Bausten so much crap for having a rabbit for not even a full day and lost the dude!!! LOL',
                        'One of my favorite stories is when Brian (owner of Results) sent Bausten and I on an errand to pick up a treadmill for the gym. We used my 1989 Ford F-250 and at the time I was also doing lawn care work. I had lots of dried cement in the back and without thinking knew we needed to get it out before we picked up the treadmill. Well I\'m a country boy, born and raised. I thought it would be no problem to find a random creek and drop it at the bottom where other large rocks were. While doing this Bausten immediately questioned if it was a good idea. Being a dumb kid, I thought it wouldn\'t be a issue. Well a man from a distance started yelling at us asking what we were doing. I guess it came out sarcastic given how Bausten laughed but I answered honestly and yelled "DROPPING OUT CEMENT!" Well we hop back in the car and navigate our way to the guys house to pick up the treadmill and sure enough.....it was that guys house. Bausten starts freaking out, saying "Hey Caleb we are friends, but I need this job man, this is on you!" He says it jokingly and I laugh nervously knowing geez I\'m so dumb. I get out to apologize and the guy promises not to tell Brian....Well I guess now he will find out! We load up the treadmill and on the drive back I do not hear the end of it!!! I\'m giving him a hard time for panicking and trying to throw me under the bus and he is giving me a hard time over how sarcastic I was and dumb I am! I was 17 at the time. We laughed the entire way home on how goofy that was! At the time it was an embarrassing memory, but as it saturated in our heads...boy did we laugh for years to come at that.',
                        'One time Claudia (my wife) and I threw a house party! Bausten and Satnam were able to make it and after about a good 4 hours of fun Bausten and I came up with the great idea to walk to Taco Bell to get some food! Bausten\'s friends Martin and Vlad went with us and as we got there they shut the doors on us! I yelled what was wrong and they told us they wouldn\'t serve us through the drive thru given we weren\'t in vehicles! Bausten asks if we can walk through the front door and they said no they are closed! Disappointed and angry we start to walk back to my house when we here Vlad yelling at us about where are food is at! Bausten says how the hell did you get food? For some reason they denied Bausten and I a late night dinner but let Vlad walk right through the front door and get whatever he wanted! And then he didn\'t even share with us! Haha!'
                    ]
                },
                {
                    author: 'Lacey (Jech) Burnett',
                    relationship: 'Cousin',
                    parts: [
                        'I remember in about 2004 I went to get Bausten from Dennis and joretas to take him to give him a haircut. I pulled up in my 1999 grey Jeep Grand Cherokee (I thought it was pretty chic). Bausten walked outside and said “I didn’t know you got a van!”'
                    ]
                },
                {
                    author: 'Satnam Aildasani',
                    relationship: 'Friend',
                    parts: [
                        'There are so many memories I have of him. I am so lucky to have met and known him for seven years.',
                        'How we met. It is so cheesy. I was playing my guitar outside of broncho lake and he was longboarding without a shirt and his big goofy headphones down hanging on his chest. He was longboarding with Niko and Niko stopped to talk to me. We got to talking and Bausten barely said 2 words he just kept circling. It was my birthday a week later and he remembered. Little did I know exactly a week later all the way across from starbucks I here HEY HAPPY BIRTHDAY. I turned and he was there with his cheeky grin wearing tank top. He then says let me buy you coffee. We spent almost an hour just talking and we both found that we had so much in common. He was intrigued by the fact that I was Kenyan. He wanted to know everything about it. He had the laugh that would light up the room. He was so genuine and so sweet. Which for me was amazing as someone that good looking shouldn’t be that kind.',
                        'He then walked me to dorm Central Plaza and said we are going to have to get you some chicken fried steak something I had never tried before. Later that week he texted me saying I am coming to pick you up we are going to get you real grub. I saw him pull up to CP with Avenged Sevenfold blasting and we had our first date a Dennies. We spoke in an English accent all night and even the waiter joined us. He always said I had a British accent whenever I get excited or speak about something I care about. After I was waiting for him to kiss me. But he was just leaning against the car and we were looking at the stars. I remember grabbing him and kissing him and he was just had the widest smile after that. I found out why later on he said he knew I was the one because I asked if we could split the bill. Oh Bausten always had a way to make everything better. From that day we spent every night hanging out.',
                        'We started playing this game on campus it was called humans and zombies. The zombies had socks and if you got hit by it you became a zombie and the humans had nurf guns. First day I saw him playing was amazing he had an entire team of humans and they were storming through campus next to the Nigh looking to kill some Zombies. I didn’t have a choice after that I joined his team. The very next week he saved me from becoming a zombie and he became on himself. That hero moment everyone talks about I was lucky to have that. He was my hero.',
                        'He asked me “ do you mind if I called you my girlfriend?” I replied “no” he looked at me in confusion and I said “I don’t mind”. I used to tease him about his English a lot. He would always use would you mind. We quickly became each others everything.',
                        'I was so nervous to go over to meet the family for the first time it had only been a few weeks of dating and I was already meeting the family. I had also recently dyed my hair turquoise and I thought they were going to think I was some emo chick. But they still welcomed me with open arms. They were all so warm and I immediately fell in love with them too. I would never have met any of the amazing people I call my family if I hadn’t met him. I am so grateful to have him in my life.',
                        'He came to Kenya with me and we had an amazing time. The first thing he did was eat all the mangos in the house. He kept saying damn the fruit in Kenya especially the mangos are the best.',
                        'We explored Kenya he got to kiss a giraffe, pet an elephant and relax at the beach. We saw so many things. We went for a game drive. It was more joyful to see his reactions to everything. Him and my brother Ram kept bullying me and singing let it go.',
                        'We explored USA too from Colorado ski trips, Whichita mountain camping, floating the river and then going to Arkansas to camp because why not, Romanose with mammo and pop. My favorite adventure with him would be when we drove from Oklahoma all the way to California stopping at all the national parks. We hiked and saw so many views. He was my adventure buddy. All the sunsets I have seen with him have been incredible.',
                        'He always knew how to make my world brighter. He built me a fort under the pingpong table pulled in my TV and poured me a glass of wine and watched harry potter with me. He planted me garden of sunflowers because he missed me when I was in Kenya visiting. He came with me to adopt Xena my puppy. He would speak to me as yoda or sing to me to make me happy. He learnt tum hi ho an Indian love song to sing to me.  He was just the best man.',
                        'Fun Facts - No party would happen without him removing his shirt and posing. As soon as we got a fire place he would light a fire until we ran out logs then call pop, dad or mum seeing if we could get some more logs. After every meal at mamoo and paps we would take a nap. We would fight for the couch. We always got the “ITIS”. He loved his killswitchengage and beatles music. His eyes would change colour according the shirts he wore. He was obsessed with shoes. We had a 20 minute conversation about which shoes he should buy and then which shoes were boots. Loved Naruto. He always thought he was Jariya He loved anything outdoors He was scared of heights which made hiking so much more interesting and he impressed me by conquering his fears. I was amazing at imitating horse neigh. I called him my horsey. He loved his scotch and cigars. Also his Stouts. Thank god he stopped the IPA’s. We kept the Christmas tree up all year because he loved the lights. He loved his family so much he always shared stories about them to me. Once Damien was licking himself and Mum (Tracey) yelled Bausten stop licking yourself. We always made fun of that. His favorite colour was yellow. He said it made everything brighter. He loved to Grill steak especially. and slow cook and anything to be outside. He loved to make biscuit and gravey (Thanks, Nanny). He was always so excited to go to Byrons to see if any new stouts were available and would always buy an extra one for dad to try. He was actually a good ping pong player after all those hours spent on youtube videos he picked up some tricks. He got so excited when shopping for a new wardrobe and when he found the scarfs ( all of you must remember the red scarf it was his favorite ) he squeeled on the phone and could not get over that they were on sale for $2. His favorite part of camping is not having to shower. That boy had some hygiene issues. We once went camping and forgot the stakes for the ground so we ventured to find rocks to use and it held up the tent. He had a hansolo cut out in his dorm room because he was that cool.'
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="sass" scoped>

.story
    background-color: rgba(250, 250, 250, 0.75)
    border-radius: 3px
    margin-bottom: 2rem
    padding: 0 2rem 1rem

blockquote
    font-size: 2rem
    margin-bottom: 0

</style>
