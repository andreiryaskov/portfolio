import React from 'react';
import style from './Skills.module.scss';
import '../../App.css';
import SkillItem from "./SkillItem/SkillItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faHtml5, faReact, faSass} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {

    const skillsItemStyle = {
        color: '#fff',
        fontSize: '5rem'
    }

    const reduxStyle = {
        display: 'inline-block',
        width: '5rem',
        height: '5rem',
        background: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiNmZmZmZmY7Ij48cGF0aCBkPSJNIDI0IDIgQyAxNi44MzIgMiAxMSAxMC4yOTIzMjggMTEgMjAuNDg2MzI4IEMgMTEgMjUuNTgxMDE1IDEyLjQ4NDk5OCAzMC4xNTQ1MDYgMTQuODQxNzk3IDMzLjQ5MjE4OCBDIDE0LjI3ODY3MSAzNC4yMjU3ODYgMTQgMzUuMTE0NzIxIDE0IDM2IEMgMTQgMzYuOTcyMjIyIDE0LjMxODY4MSAzNy45NTc4ODEgMTUuMDAxOTUzIDM4LjcyNjU2MiBDIDE1LjY4NTIyNiAzOS40OTUyNDQgMTYuNzUgNDAgMTggNDAgQyAxOS4yNSA0MCAyMC4zMTQ3NzQgMzkuNDk1MjQ0IDIwLjk5ODA0NyAzOC43MjY1NjIgQyAyMS42ODEzMTkgMzcuOTU3ODgxIDIyIDM2Ljk3MjIyMiAyMiAzNiBDIDIyIDM1LjAyNzc3OCAyMS42ODEzMTkgMzQuMDQyMTE5IDIwLjk5ODA0NyAzMy4yNzM0MzggQyAyMC4zMTQ3NzQgMzIuNTA0NzU2IDE5LjI1IDMyIDE4IDMyIEMgMTcuNDE3OTIzIDMyIDE2Ljg4MjMyIDMyLjExNzkxNSAxNi40MDAzOTEgMzIuMzEyNSBDIDE0LjMxNzcwOSAyOS4zMTc3OTMgMTMgMjUuMTQ0MDM3IDEzIDIwLjQ4NjMyOCBDIDEzIDExLjM5NTMyOCAxNy45MzUgNCAyNCA0IEMgMjkuNDE5IDQgMzMuOTIzMjE5IDkuOTA5MzkwNiAzNC44MjQyMTkgMTcuNjUwMzkxIEMgMzUuNTMxMjE5IDE3LjkxOTM5MSAzNi4yMzI3MzQgMTguMjIyNjQxIDM2LjkyNzczNCAxOC41NTY2NDEgQyAzNi4yNDY3MzQgOS4yNjY2NDA2IDMwLjcxIDIgMjQgMiB6IE0gMjIgMTUgQyAyMC43NSAxNSAxOS42ODUyMjYgMTUuNTA0NzU2IDE5LjAwMTk1MyAxNi4yNzM0MzggQyAxOC4zMTg2ODEgMTcuMDQyMTE5IDE4IDE4LjAyNzc3OCAxOCAxOSBDIDE4IDE5Ljk3MjIyMiAxOC4zMTg2ODEgMjAuOTU3ODgxIDE5LjAwMTk1MyAyMS43MjY1NjIgQyAxOS42ODUyMjYgMjIuNDk1MjQ0IDIwLjc1IDIzIDIyIDIzIEMgMjMuMjUgMjMgMjQuMzE0Nzc0IDIyLjQ5NTI0NCAyNC45OTgwNDcgMjEuNzI2NTYyIEMgMjUuNDI1MDkyIDIxLjI0NjEzNyAyNS42OTQyMzkgMjAuNjc3NjcgMjUuODQ3NjU2IDIwLjA4Mzk4NCBDIDI5LjQyNTI0NSAxOS45MzAxMjggMzMuNDQ1ODg3IDIwLjk4NzEwNyAzNy4xNDI1NzggMjMuMjAzMTI1IEMgNDUuMDM2NTc4IDI3LjkzNTEyNSA0OS4wMTI4NTkgMzYuMTg2NzAzIDQ2LjAwNTg1OSA0MS41OTU3MDMgQyA0NC45MzE4NTkgNDMuNTI2NzAzIDQzLjA1NjkzOCA0NC44OTc1OTQgNDAuNTg1OTM4IDQ1LjU1ODU5NCBDIDM3LjEyMzkzNyA0Ni40ODY1OTQgMzIuODcxNSA0NS45MTYwNzggMjguODEyNSA0NC4wODAwNzggQyAyOC4yMjY1IDQ0LjU1MTA3OCAyNy42MDY3NSA0NC45OTY3MzQgMjYuOTY4NzUgNDUuNDI3NzM0IEMgMzAuMjkzNzUgNDcuMTA2NzM0IDMzLjgxMjUgNDcuOTk2MDk0IDM3LjA2MjUgNDcuOTk2MDk0IEMgMzguNDczNSA0Ny45OTYwOTQgMzkuODMzNTE2IDQ3LjgzMDIzNCA0MS4xMDM1MTYgNDcuNDkwMjM0IEMgNDQuMTEwNTE2IDQ2LjY4NTIzNCA0Ni40MTA5MDYgNDQuOTgyNDA2IDQ3Ljc1MzkwNiA0Mi41NjY0MDYgQyA1MS4yNzc5MDYgMzYuMjI0NDA2IDQ2Ljk3ODkyMiAyNi43NjkyODEgMzguMTY5OTIyIDIxLjQ4ODI4MSBDIDM0LjE5Mzg3IDE5LjEwMzIwMiAyOS44MjU1NjggMTcuOTM2NTIzIDI1Ljg4NjcxOSAxOC4wNjQ0NTMgQyAyNS43NDQxNjYgMTcuNDE2Mzg2IDI1LjQ2MDggMTYuNzk0MDM0IDI0Ljk5ODA0NyAxNi4yNzM0MzggQyAyNC4zMTQ3NzQgMTUuNTA0NzU2IDIzLjI1IDE1IDIyIDE1IHogTSAyMiAxNyBDIDIyLjc0OTk5OSAxNyAyMy4xODUyMjYgMTcuMjQ1MjQ0IDIzLjUwMTk1MyAxNy42MDE1NjIgQyAyMy44MTg2OCAxNy45NTc4ODEgMjQgMTguNDcyMjIyIDI0IDE5IEMgMjQgMTkuNTI3Nzc4IDIzLjgxODY4IDIwLjA0MjExOSAyMy41MDE5NTMgMjAuMzk4NDM4IEMgMjMuMTg1MjI2IDIwLjc1NDc1NiAyMi43NDk5OTkgMjEgMjIgMjEgQyAyMS4yNTAwMDEgMjEgMjAuODE0Nzc0IDIwLjc1NDc1NiAyMC40OTgwNDcgMjAuMzk4NDM4IEMgMjAuMTgxMzIgMjAuMDQyMTE5IDIwIDE5LjUyNzc3OCAyMCAxOSBDIDIwIDE4LjQ3MjIyMiAyMC4xODEzMiAxNy45NTc4ODEgMjAuNDk4MDQ3IDE3LjYwMTU2MiBDIDIwLjgxNDc3NCAxNy4yNDUyNDQgMjEuMjUwMDAxIDE3IDIyIDE3IHogTSA5LjE2MjEwOTQgMjMuMzMyMDMxIEMgMi4xOTgxMDk0IDI4Ljc3MjAzMSAtMC44OTc5NTMxMyAzNi45MDY0MDYgMi4yNDgwNDY5IDQyLjU2NjQwNiBDIDMuNTkxMDQ2OSA0NC45ODI0MDYgNS44OTE0Mzc1IDQ2LjY4MzI4MSA4Ljg5ODQzNzUgNDcuNDg4MjgxIEMgMTAuMTY5NDM4IDQ3LjgyODI4MSAxMS41Mjg0NTMgNDcuOTk2MDk0IDEyLjkzOTQ1MyA0Ny45OTYwOTQgQyAxNi43Mzk0NTMgNDcuOTk2MDk0IDIwLjkxMTAzMSA0Ni43ODc3MTkgMjQuNzA3MDMxIDQ0LjUxMTcxOSBDIDI5LjI2Mjc1OCA0MS43ODA0ODggMzIuNTQzNjcxIDM3LjkzMzEyOCAzNC4yMTI4OTEgMzMuOTc4NTE2IEMgMzUuMzY3NzY0IDMzLjkyMzE2NyAzNi4zNTUxNTggMzMuNDQ5ODEyIDM2Ljk5ODA0NyAzMi43MjY1NjIgQyAzNy42ODEzMTkgMzEuOTU3ODgxIDM4IDMwLjk3MjIyMiAzOCAzMCBDIDM4IDI5LjAyNzc3OCAzNy42ODEzMTkgMjguMDQyMTE4IDM2Ljk5ODA0NyAyNy4yNzM0MzggQyAzNi4zMTQ3NzQgMjYuNTA0NzU2IDM1LjI1IDI2IDM0IDI2IEMgMzIuNzUgMjYgMzEuNjg1MjI2IDI2LjUwNDc1NiAzMS4wMDE5NTMgMjcuMjczNDM4IEMgMzAuMzE4NjgxIDI4LjA0MjExOSAzMCAyOS4wMjc3NzggMzAgMzAgQyAzMCAzMC45NzIyMjIgMzAuMzE4NjgxIDMxLjk1Nzg4MiAzMS4wMDE5NTMgMzIuNzI2NTYyIEMgMzEuMzM0MDI3IDMzLjEwMDE0NSAzMS43NjAyMzcgMzMuNDA3NjQ4IDMyLjI1IDMzLjYyODkwNiBDIDMwLjY4MTU0OCAzNy4wMzc2OTUgMjcuNzE1MjQ0IDQwLjM3NjU2NSAyMy42Nzc3MzQgNDIuNzk2ODc1IEMgMTguOTI3NzM0IDQ1LjY0NTg3NSAxMy41OTYwNjIgNDYuNjc4NTk0IDkuNDE0MDYyNSA0NS41NTg1OTQgQyA2Ljk0MjA2MjUgNDQuODk2NTk0IDUuMDY5MDkzOCA0My41MjY3MDMgMy45OTYwOTM4IDQxLjU5NTcwMyBDIDEuNDU0MDkzOCAzNy4wMjI3MDMgMy45MTQ5NTMxIDMwLjQyNzc2NiA5LjUwMTk1MzEgMjUuNjM0NzY2IEMgOS4zNTY5NTMxIDI0Ljg4Mzc2NiA5LjI0NDEwOTQgMjQuMTE0MDMxIDkuMTYyMTA5NCAyMy4zMzIwMzEgeiBNIDM0IDI4IEMgMzQuNzQ5OTk5IDI4IDM1LjE4NTIyNiAyOC4yNDUyNDQgMzUuNTAxOTUzIDI4LjYwMTU2MiBDIDM1LjgxODY4IDI4Ljk1Nzg4MSAzNiAyOS40NzIyMjIgMzYgMzAgQyAzNiAzMC41Mjc3NzggMzUuODE4NjggMzEuMDQyMTE4IDM1LjUwMTk1MyAzMS4zOTg0MzggQyAzNS4xODUyMjYgMzEuNzU0NzU2IDM0Ljc0OTk5OSAzMiAzNCAzMiBDIDMzLjI1MDAwMSAzMiAzMi44MTQ3NzQgMzEuNzU0NzU2IDMyLjQ5ODA0NyAzMS4zOTg0MzggQyAzMi4xODEzMiAzMS4wNDIxMTkgMzIgMzAuNTI3Nzc4IDMyIDMwIEMgMzIgMjkuNDcyMjIyIDMyLjE4MTMyIDI4Ljk1Nzg4MiAzMi40OTgwNDcgMjguNjAxNTYyIEMgMzIuODE0Nzc0IDI4LjI0NTI0NCAzMy4yNTAwMDEgMjggMzQgMjggeiBNIDE4IDM0IEMgMTguNzQ5OTk5IDM0IDE5LjE4NTIyNiAzNC4yNDUyNDQgMTkuNTAxOTUzIDM0LjYwMTU2MiBDIDE5LjgxODY4IDM0Ljk1Nzg4MSAyMCAzNS40NzIyMjIgMjAgMzYgQyAyMCAzNi41Mjc3NzggMTkuODE4NjggMzcuMDQyMTE5IDE5LjUwMTk1MyAzNy4zOTg0MzggQyAxOS4xODUyMjYgMzcuNzU0NzU2IDE4Ljc0OTk5OSAzOCAxOCAzOCBDIDE3LjI1MDAwMSAzOCAxNi44MTQ3NzQgMzcuNzU0NzU2IDE2LjQ5ODA0NyAzNy4zOTg0MzggQyAxNi4xODEzMiAzNy4wNDIxMTkgMTYgMzYuNTI3Nzc4IDE2IDM2IEMgMTYgMzUuNDcyMjIyIDE2LjE4MTMyIDM0Ljk1Nzg4MSAxNi40OTgwNDcgMzQuNjAxNTYyIEMgMTYuODE0Nzc0IDM0LjI0NTI0NCAxNy4yNTAwMDEgMzQgMTggMzQgeiI+PC9wYXRoPjwvc3ZnPg==') 50% 50% no-repeat`,
    backgroundSize: '100%'
    }
    const materialUiStyle = {
        display: 'inline-block',
        width: '5rem',
        height: '5rem',
        background: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6I2ZmZmZmZjsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTMuNTgzMzMsMTcuOTE2NjdsMjEuNSwxNC4zMzMzM3Y3MS42NjY2N2wtMjEuNSwtMTQuMzMzMzN6Ij48L3BhdGg+PHBhdGggZD0iTTE2OC40MTY2Nyw3MS42NjY2N2wtMjEuNSwxNC4zMzMzM3Y0Ni41ODMzM2wyMS41LC0xNC4zMzMzM3oiPjwvcGF0aD48cGF0aCBkPSJNMTY4LjQxNjY3LDIxLjVsLTIxLjUsMTQuMzMzMzN2MjUuMDgzMzNsMjEuNSwtMTQuMzMzMzN6Ij48L3BhdGg+PHBhdGggZD0iTTEyNS40MTY2NywxNy45MTY2N2wtMjEuNSwxNC4zMzMzM3Y3MS42NjY2N2wyMS41LC0xNC4zMzMzM3oiPjwvcGF0aD48cGF0aCBkPSJNMy41ODMzMyw0M2w2MC45MTY2NywzOS40MTY2N3YtMjUuMDgzMzNsLTYwLjkxNjY3LC0zOS40MTY2N3oiPjwvcGF0aD48cGF0aCBkPSJNMTI1LjQxNjY3LDQzbC02MC45MTY2NywzOS40MTY2N3YtMjUuMDgzMzNsNjAuOTE2NjcsLTM5LjQxNjY3eiI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjUuNDE2NjcsOTMuMTY2NjdsLTYwLjkxNjY3LDM5LjQxNjY3di0yNS4wODMzM2w2MC45MTY2NywtMzkuNDE2Njd6Ij48L3BhdGg+PHBhdGggZD0iTTE2OC40MTY2NywxMjEuODMzMzNsLTYwLjkxNjY3LDM5LjQxNjY3di0yNS4wODMzM2w2MC45MTY2NywtMzkuNDE2Njd6Ij48L3BhdGg+PHBhdGggZD0iTTEwNy41LDEzNS4zMjQ1OGwtNDMsLTI3LjgyNDU4djI1LjA4MzMzbDQzLDI3LjgyNDU4eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+') 50% 50% no-repeat`,
        backgroundSize: '100%'
    }
    const jsIconStyle = {
        display: 'inline-block',
        width: '5rem',
        height: '5rem'
    }

    const skillsItemIcon = {
        react: {
            icon: <FontAwesomeIcon style={skillsItemStyle}
                                   icon={faReact} />,
            data: 'React'
        },
        redux: {
            // icon: <FontAwesomeIcon  style={skillsItemStyle}
            //                         icon={faReact} />,
            icon: <div style={reduxStyle}></div>,
            data: 'React-Redux'
        },
        ts: {
            icon: <img style={jsIconStyle} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABjUlEQVRoge2YsS4EURSG/yMKm2gUWM0+gHgBBQ2FnlKlJiQK1XYStAothcoDaDyBRKVVSDQmUW1ISIRPsVessSS7M3dccr5mMicz55xvbu7MvSM5jtMTwBKQkS63wGK+b+sikkkar+Sp9U9mZhM/XvGuXVFDPfNdfwO/0UwMXCQ1XCQ1XCQ1XCQ1XCQ1/o3IYIykwJCkmqQnM3vsiDckycxuYtTNN1F49QtshjQ74XwGuO7YU6yV3V+UEckVrkk6kTQq6VDSq6TLsutEF5E0Kaku6czMVmIVqWKy36k9CtPAQqwi0UXCxD6QNCzpFNgFvmyxi1LV63ddUlPtkdmStFF2gUpEzOzVzLYlLYdQ6XMllshYON7n4ufh+BKp7gdFviNAAzgCWiHNPDAFXADHwFWIN6P3V1BkLtz+DOwDBswCDyHeAvaAvl/7lYiE++vhI9gZM2Ck35y5XNWIxMZ/0P0VXCQ1XCQ1XCQ1XCQ1XCQ1ui2nM0n1lBeOavf4iW4jstrtwoTI1O7RcZweeAO+77Kvt+8B6wAAAABJRU5ErkJggg=="/>,
            data: 'JavaScript+TypeScript'
        },
        github: {
            icon: <FontAwesomeIcon style={skillsItemStyle}
                                   icon={faGithub} />,
                // <div style={materialUiStyle}></div>,
            data: 'Git'
        },
        html: {
            icon: <FontAwesomeIcon style={skillsItemStyle}
                                   icon={faHtml5} />,
            data: 'HTML+CSS'
        },
        sass: {
            icon: <FontAwesomeIcon style={skillsItemStyle}
                                   icon={faSass} />,
            data: 'SASS'
        }
    }

    return (
        <div className='container'>
            <div className={style.skills}>
                <h2>What i do</h2>
                <div className={style.wrapper}>
                    <SkillItem icon={skillsItemIcon.react.icon}
                               descr={skillsItemIcon.react.data}/>
                    <SkillItem icon={skillsItemIcon.redux.icon}
                               descr={skillsItemIcon.redux.data}/>
                    <SkillItem icon={skillsItemIcon.ts.icon}
                               descr={skillsItemIcon.ts.data}/>
                    <SkillItem icon={skillsItemIcon.github.icon}
                               descr={skillsItemIcon.github.data}/>
                    <SkillItem icon={skillsItemIcon.html.icon}
                               descr={skillsItemIcon.html.data}/>
                    <SkillItem icon={skillsItemIcon.sass.icon}
                               descr={skillsItemIcon.sass.data}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;