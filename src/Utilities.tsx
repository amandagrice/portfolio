import React from "react";

interface ToggleDetailsProps {
    showDetails: boolean
    setShowDetails: (b: boolean) => void
}
export function ToggleDetails({showDetails, setShowDetails}: ToggleDetailsProps) {
    return (
        <div>
            {!showDetails && <div className="showDetails" onClick={() => setShowDetails(true)}>Show More Details</div>}
            {showDetails && <div className="showDetails" onClick={() => setShowDetails(false)}>Show Less</div>}
        </div>
    )
}