
import { DotsTwo, General, Support } from "@svg/index";
import FaqThumb from "./faq-thumb";
import SingleFaq from "./single-faq";

// single nav
function NavItem({ active, id, title, icon }) {
  return (
    <button
      className={`nav-link ${active ? "active" : ""}`}
      id={`nav-${id}-tab`}
      data-bs-toggle="tab"
      data-bs-target={`#${id}`}
      type="button"
      role="tab"
      aria-controls={`nav-${id}`}
      aria-selected={active ? "true" : "false"}
      tabIndex="-1"
    >
      <span>{icon}</span>
      {title}
    </button>
  );
}

// TabItem
export function TabItem({ active, id, accordion_items }) {
  return (
    <div
      className={`tab-pane fade ${active ? "show active" : ""}`}
      id={`${id}`}
      role="tabpanel"
      aria-labelledby={`nav-${id}-tab`}
    >
      {/* <!-- faq item one of community question --> */}
      {accordion_items.map((item, i) => (
        <div key={i} className="faq__item pb-95">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4">
              <div className="faq__content">
                <h3 className="faq__title-2">{item.title}</h3>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-8">
              <div className="faq__wrapper faq__style-4 tp-accordion">
                <div className="accordion" id={`${id}-${i + 1}_accordion`}>
                  {item.accordions.map((item) => (
                    <SingleFaq key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


const FaqArea = ({ element_faq = false }) => {
  // tab item
  return (
    <>
      {/* faq thumb start */}
      {!element_faq && <FaqThumb />}
      {/* faq thumb end */}

      {/* faq area start */}
      <section className="faq__area pt-100 pb-25">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="faq__tab-2 tp-tab mb-50">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <NavItem
                      active={true}
                      id="general"
                      icon={<General />}
                      title="General Questions"
                    />
                  </li>
                  <li className="nav-item" role="presentation">
                    <NavItem
                      id="community"
                      icon={<DotsTwo />}
                      title="Community"
                    />
                  </li>
                  <li className="nav-item" role="presentation">
                    <NavItem id="support" icon={<Support />} title="Support" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="faq__item-wrapper">
            <div className="tab-content" id="faqTabContent">
              {/* general */}
              <TabItem
                active={true}
                id="general"
                accordion_items={[
                  {
                    title: (
                      <>
                        Orders <br />& Shipping
                      </>
                    ),
                    accordions: [
                      {
                        id: "One",
                        title: "what services do you offer",
                        show: true,
                        desc: "we offer energy efficint upgrades for residential hot water system and heating and cooling system (aircon)",
                        parent: "general-1_accordion",
                      },
                      {
                        id: "Two",
                        title: " how can i benefit from your services",
                        desc: "we do thorough assessment of one's site and as per the requirement that we tailor a plan for them",
                        parent: "general-1_accordion",
                      },
                      {
                        id: "Three",
                        title: "how do i know if i am eligible?",
                        desc: "Eligibility depends on the specific government scheme and the products you need. Contact us (1300 785 436) for a detailed assessment.",
                        parent: "general-1_accordion",
                      },
                      {
                        id: "four",
                        title: "How do i started?",
                        desc: "You can get started by requesting a free quote through our website, and our professional team will guide you through the process.",
                        parent: "general-1_accordion",
                      },
                    ],
                  },
                  {
                    title: (
                      <>
                        Returns <br />& Exchanges
                      </>
                    ),
                    accordions: [
                      {
                        id: "five",
                        title: "How do I schedule an install?",
                        show: true,
                        desc: "You can schedule an installation by contacting us (1300 785 436) through our website or calling our customer service team.",
                        parent: "general-2_accordion",
                      },
                      {
                        id: "six",
                        title:
                          "Why are certain products unavailable to ship to Internationally?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "general-2_accordion",
                      },
                      {
                        id: "seven",
                        title: "Why is my tracking number not updating?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "general-2_accordion",
                      },
                    ],
                  },
                  {
                    title: "Discounts",
                    accordions: [
                      {
                        id: "eight",
                        title: "How do I know my package has shipped?",
                        show: true,
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "general-3_accordion",
                      },
                      {
                        id: "nine",
                        title:
                          "Why are certain products unavailable to ship to Internationally?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "general-3_accordion",
                      },
                      {
                        id: "ten",
                        title: "Why is my tracking number not updating?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "general-3_accordion",
                      },
                    ],
                  },
                ]}
              />

              {/* community */}
              <TabItem
                id="community"
                accordion_items={[
                  {
                    title: (
                      <>
                        Returns <br />& Exchanges
                      </>
                    ),
                    accordions: [
                      {
                        id: "eleven",
                        title: "Can I cancel my account at any time?",
                        show: true,
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "community-1_accordion",
                      },
                      {
                        id: "twelve",
                        title: "What happens after the license expires?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "community-1_accordion",
                      },
                      {
                        id: "thirteen",
                        title: "Does Harry have any documentations?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "community-1_accordion",
                      },
                      {
                        id: "fourteen",
                        title: "How long do I get support & updates?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "community-1_accordion",
                      },
                    ],
                  },
                ]}
              />

              {/* support */}
              <TabItem
                id="support"
                accordion_items={[
                  {
                    title: "Discounts",
                    accordions: [
                      {
                        id: "fifteen",
                        title: "Can I cancel my account at any time?",
                        show: true,
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "support-1_accordion",
                      },
                      {
                        id: "sixteen",
                        title: "What happens after the license expires?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "support-1_accordion",
                      },
                      {
                        id: "seventeen",
                        title: "Does Harry have any documentations?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "support-1_accordion",
                      },
                      {
                        id: "eighteen",
                        title: "How long do I get support & updates?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "support-1_accordion",
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      {/* faq area end */}
    </>
  );
};

export default FaqArea;
