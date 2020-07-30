import * as React from 'react';
import './Main.scss';
import {joinTruthy} from "../../utils/utils";

export const Main: React.FunctionComponent = () => (
    <main className='main'>
        <article className='article'>
            <div className='article__date'>12:50 13 Oct 2020</div>
            <h2 className='article__title'>Simplicity is the ultimate sophistication</h2>
            <h3 className='article__sub-title'>
                Customize interactively distributed data whereas strategic value. Compellingly engineer world-class resources through optimal mindshare. Uniquely
                incubate client-centered deliverables through market-driven strategic theme.
            </h3>
            <div className='article__text-wrapper'>
                <p className='article__text'>
                    Seize value-added architectures for clicks-and-mortar e-services. Conveniently pontificate ethical partnerships for prospective schemas.
                    Interactively generate client-centered "outside the box" thinking for innovative vortals.
                    Efficiently engineer e-business leadership skills rather than bricks-and-clicks resources.
                    Compellingly enhance quality e-tailers via extensive e-business.
                    Compellingly innovate global paradigms whereas cross functional benefits. Assertively foster performance based imperatives without sustainable models.
                    Enthusiastically reintermediate client-based human capital after excellent.
                </p>
                <div className='article__split-paragraph'>
                    <p className='article__text'>
                        Incubate fully tested expertise after interactive services. Objectively scale stand-alone partnerships vis-a-vis market positioning quality vectors.
                        Dramatically fabricate extensive human capital without parallel infomediaries. Energistically promote error-free quality vectors whereas.
                    </p>
                    <p className='article__text'>
                        Extend team driven innovation through premier infrastructures. Completely formulate principle-centered functionalities through granular relationships.
                        Competently restore client-centric functionalities via functional leadership.
                    </p>
                </div>
                <div className={joinTruthy([
                    'article__text',
                    'highlighted-text-box'
                ])}>
                    <span className='highlighted-text-box__quote-sign'>“</span>
                    <p className={joinTruthy([
                        'article__text',
                        'highlighted-text-box__text'
                    ])}>
                        It is not enough that we build products that function, that are understandable and usable,
                        we also need to build products that bring joy and excitement, pleasure and fun, and, yes, beauty to people’s lives.
                    </p>
                    <cite className='highlighted-text-box__cite'>— Don Norman</cite>
                </div>
                <p className='article__text'>
                    Competently unleash enterprise materials before B2C innovation. Intrinsicly deploy viral models whereas client-centric resources.
                    Objectively foster emerging channels through stand-alone content. Enthusiastically recaptiualize granular core competencies whereas progressive e-markets.
                    Objectively re-engineer distinctive total linkage without cross-media process improvements.
                    Uniquely formulate unique supply chains with end-to-end internal or "organic" sources. Intrinsicly synergize transparent.
                </p>
            </div>
        </article>
    </main>
);