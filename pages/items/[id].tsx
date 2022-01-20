import { NextPage } from "next";

const ItemDetail: NextPage = () => {
  return (
    <div>
      <div>
        <div />
        <div>
          <div />
          <div>
            <p>Stephen Joves</p>
            <p>View Profile &rarr;</p>
          </div>
        </div>
        <div>
          <h1>Galaxy S100</h1>
          <p>$150</p>
          <p>
            Smooth like butter Like a criminal undercover Gon’ pop like trouble
            Breakin’ into your heart like that Cool shade stunner Yeah I owe it
            all to my mother. Hot like summer Yeah I’m makin’ you sweat like
            that Break it down
          </p>
          <div>
            <button>Talk to Seller</button>
            <button>
              <svg
                className="h-6 w-6 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2>Similar Items</h2>
        <div>
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i}>
              <div />
              <h3>Galaxy S75</h3>
              <p>$75</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
