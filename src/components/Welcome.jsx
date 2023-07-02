import { Link } from 'react-router-dom';
import classes from './Welcome.module.css';
import Card from './UI/Card';

const Welcome = () => {
    return (
        <div className={classes.container}>
            <Card>
                <h2>Welcome To Hiring Portal</h2>
                <p>
                    Welcome to our Hiring Portal, your one-stop destination for
                    finding and applying to the perfect job opportunities. Our
                    website is designed to assist users in their job search
                    journey, providing a seamless and user-friendly experience.
                </p>
                <p>
                    With our extensive database of job listings from various
                    industries, you'll have access to a wide range of employment
                    opportunities. Whether you're a fresh graduate looking for
                    your first job or an experienced professional seeking a
                    career change, our platform caters to individuals at all
                    stages of their careers.
                </p>
                <p>
                    The search functionality of our Hiring Portal allows users
                    to refine their job search based on specific criteria such
                    as location, industry, job title, and salary range. This
                    ensures that you can easily find relevant job openings that
                    match your preferences and qualifications.
                </p>
                <p>
                    Once you've found a job that interests you, our intuitive
                    interface makes it effortless to apply. Simply create an
                    account, upload your resume, and submit your application
                    directly through our platform. You can also track the status
                    of your applications and receive notifications for any
                    updates or interview requests.
                </p>
                <p>
                    Furthermore, our Hiring Portal offers additional features to
                    enhance your job search experience. You can set up job
                    alerts to receive notifications for new job listings that
                    match your specified criteria. We also provide resources
                    such as career advice articles, interview tips, and industry
                    insights to help you succeed in your job search and
                    professional development.
                </p>
                <p>
                    At our Hiring Portal, we prioritize user privacy and data
                    security. Rest assured that your personal information is
                    treated with the utmost confidentiality and is only shared
                    with potential employers upon your consent.
                </p>
                <p>
                    Join our community of job seekers today and let our Hiring
                    Portal be your trusted companion in finding your dream job.
                    Start exploring the countless opportunities that await you
                    and take the next step towards a rewarding career.
                </p>
                <Link to='/auth'>Login / SignUp</Link>
            </Card>
        </div>
    );
};

export default Welcome;
