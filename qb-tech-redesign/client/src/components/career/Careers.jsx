import React, { useEffect, useState } from 'react';
import { fetchJobs } from '../../services/api'; 

const Careers = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchJobs()
            .then(res => {
                const data = Array.isArray(res.data) ? res.data : [];
                setJobs(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Fetch error:", err);
                setJobs([]); 
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center py-20 text-gray-400">Loading...</div>;

    return (
        <section id="careers" className="py-24 px-6 bg-white/[0.02]">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold mb-16 text-center">Open Positions</h2>

                <div className="space-y-4 mb-20">
                    {/* Defensive mapping: Only map if it's an array */}
                    {Array.isArray(jobs) && jobs.length > 0 ? (
                        jobs.map((job) => (
                            <div key={job.id} className="group p-8 rounded-xl bg-[#0f0f12] border border-white/5 ...">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500">{job.title}</h3>
                                <p className="text-gray-400 text-sm">{job.desc}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 italic">No open positions found.</p>
                    )}
                </div>
            </div>
        </section>
    );
};
export default Careers;