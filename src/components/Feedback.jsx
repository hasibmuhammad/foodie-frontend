const Feedback = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 px-10 lg:px-0">
      <div className="my-10">
        <h1 className="text-center font-extrabold text-5xl">What People Say</h1>
        <div className="flex justify-center items-center">
          <hr className="mt-4 border border-b-4 border-primary w-32" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        <div className="shadow-2xl p-10 bg-gray-50 rounded-lg">
          <i className="text-lg text-gray-500">
            "I can't express how much I love the variety and quality of the food
            and beverages on this website! The flavors are exquisite, and the
            presentation is top-notch. It's become my go-to for discovering new
            and delicious treats. The user-friendly interface also makes the
            whole experience a joy. Kudos to the team for creating such a
            fantastic platform!"
            <br />- Sarah T.
          </i>
          <br />
          {/* <small className="text-right"> - Sarah T.</small> */}
        </div>
        <div className="shadow-2xl p-10 bg-gray-50 rounded-lg">
          <i className="text-lg text-gray-500">
            "What a gem of a website! The attention to detail in curating a
            diverse selection of food and beverage options is truly commendable.
            I appreciate the commitment to quality and the seamless ordering
            process. Not only does the site make it easy to explore and find
            exactly what I'm craving, but the timely delivery ensures that I can
            enjoy my favorite treats without any hassle. Keep up the great
            work!"
            <br />- James M.
          </i>
          <br />
          {/* <small className="text-right"> - Sarah T.</small> */}
        </div>
        <div className="shadow-2xl p-10 bg-gray-50 rounded-lg">
          <i className="text-lg text-gray-500">
            "I've never been disappointed with my orders from this website. The
            food and beverage options are not only delicious but also reflect a
            dedication to sourcing high-quality ingredients. The customer
            service is exceptional, addressing any queries promptly. It's
            evident that the team behind the scenes is passionate about
            providing an outstanding culinary experience. I highly recommend
            this platform to all food and beverage enthusiasts!"
            <br />- Emily W.
          </i>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
