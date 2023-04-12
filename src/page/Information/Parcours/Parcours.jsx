import React, { useState } from 'react';
import { Container, Tabs, Wrapper, Scolaires, Professionnels } from './Parcours.styled';

import Schools from './School.json';
import Jobs from './Job.json';

import { BiUpArrow, BiDownArrow } from 'react-icons/bi';

function Parcours() {
    const [tab, setTab] = useState(0);
    const [ecole, setEcole] = useState(0);
    const [job, setJob] = useState(0);

    const handleTab = id => {
        setTab(id);
    }

    const handleSchool = number => {
        if (number === -1) {
            if (ecole > 0) {
                setEcole(ecole => ecole - 1);
            } else {
                setEcole(Schools.length - 1);
            }
        } else {
            if (ecole < (Schools.length - 1)) {
                setEcole(ecole => ecole + 1);
            } else {
                setEcole(0);
            }
        }
    }

    const handleJob = number => {
        if (number === -1) {
            if (job > 0) {
                setJob(job => job - 1);
            } else {
                setJob(Jobs.length - 1);
            }
        } else {
            if (job < (Jobs.length - 1)) {
                setJob(job => job + 1);
            } else {
                setJob(0);
            }
        }
    }

    return (
        <Container>
            <Tabs>
                <div onClick={() => handleTab(0)} className={tab === 0 ? 'active' : ''}>Parcours professionnels</div>
                <div onClick={() => handleTab(1)} className={tab === 1 ? 'active' : ''}>Parcours scolaires</div>
            </Tabs>
            <hr />
            <Wrapper>
                {
                    tab === 0 ?

                        <Professionnels>
                            <div className='desc'>
                                <p>Description</p>
                                <p>1/1</p>
                            </div>

                            <div className='content'>
                                <div className='title'>
                                    <p>Date</p>
                                    <p>{Jobs[job].date}</p>
                                </div>
                                <hr />
                                <div className='ecole societe'>
                                    <p>Société</p>
                                    <p>{Jobs[job].societe}</p>
                                </div>
                                <hr />
                                <div className='etude profession'>
                                    <p>Fonction</p>
                                    <p>{Jobs[job].fonction}</p>
                                </div>
                                <hr />
                                <div className='commentaire'>
                                    <p>Commentaire</p>
                                    <p>{Jobs[job].commentaire}</p>
                                </div>

                                <div className="arrow">
                                    <BiUpArrow onClick={() => handleJob(-1)} />
                                    <BiDownArrow onClick={() => handleJob(1)} />
                                </div>
                            </div>
                        </Professionnels>

                        :

                        <Scolaires>
                            <div className='desc'>
                                <p>Description</p>
                                <p>{Schools[ecole].id}/{Schools.length}</p>
                            </div>

                            <div className='content'>
                                <div className='title'>
                                    <p>Date</p>
                                    <p>{Schools[ecole].date}</p>
                                </div>
                                <hr />
                                <div className='ecole'>
                                    <p>École</p>
                                    <p>{Schools[ecole].ecole}</p>
                                </div>
                                <hr />
                                <div className='etude'>
                                    <p>Étude</p>
                                    <p>{Schools[ecole].etude}</p>
                                </div>
                                <hr />
                                <div className='commentaire'>
                                    <p>Commentaire</p>
                                    <p>{Schools[ecole].commentaire}</p>
                                </div>

                                <div className="arrow">
                                    <BiUpArrow onClick={() => handleSchool(-1)} />
                                    <BiDownArrow onClick={() => handleSchool(1)} />
                                </div>
                            </div>
                        </Scolaires>
                }
            </Wrapper>
        </Container>
    );
}

export default Parcours;
