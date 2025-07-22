import { useState } from "react";
import Modal from "../../common/Modal";
import { MemberRole } from "../../../enums/Member";

type Member = {
  id: number;
  name: string;
  email: string;
  profile: string;
  role: MemberRole;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  memberList : Member[];
};

const dummyMembers: Member[] = [
  {
    id: 1,
    name: "Hanna Baptista",
    email: "hannabaptista@gmail.com",
    profile: "/scrumble.svg",
    role: MemberRole.Owner,
  },
  {
    id: 2,
    name: "Hanna Baptista",
    email: "hannabaptista@gmail.com",
    profile: "/scrumble.svg",
    role: MemberRole.CanView,
  },
  {
    id: 3,
    name: "Hanna Baptista",
    email: "hannabaptista@gmail.com",
    profile: "/scrumble.svg",
    role: MemberRole.CanEdit,
  },
];

const InviteMemberModal = ({ isOpen, onClose, memberList }: Props) => {
  console.log(memberList)
  const [email, setEmail] = useState("");
  const [members, setMembers] = useState(dummyMembers);
  const [shareLink] = useState("https://scrumble.ex/");

  const handleRoleChange = (id: number, newRole: MemberRole) => {
    setMembers(members =>
      members.map(m =>
        m.id === id ? { ...m, role: newRole } : m
      )
    );
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
  };

  return (
    <Modal width={803} isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col w-full gap-6">
        <div className="text-2xl font-bold">Invite member</div>

        {/* Email input */}
        <div>
          <div className="text-[16px] font-medium mb-2.5">Email</div>
          <div className="flex items-center gap-3">
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 border border-[#DBDEE3] rounded px-4 py-3 text-base outline-none"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded px-6 py-3 transition">
              Send Invite
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-[#DBDEE3]" />

        {/* Member List */}
        <div className="text-[16px] font-medium">Member</div>
        <div className="">
          <ul className="flex flex-col gap-4">
            {members.map(member => (
              <li key={member.id} className="flex items-center gap-4">
                <img
                  src={member.profile}
                  alt={member.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="font-semibold">{member.name}</div>
                  <div className="text-sm">{member.email}</div>
                </div>
                <div className="relative border border-[#DBDEE3] w-35 rounded">
                  <select
                    className="w-full appearance-none px-3 py-2 cursor-pointer"
                    value={member.role}
                    onChange={e => handleRoleChange(member.id, e.target.value as MemberRole)}
                  >
                    {Object.values(MemberRole).map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <img src="/chevron-down.svg" alt="chevron" className="w-4 h-4" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Share link */}
        <div className="flex flex-col gap-2.5">
          <div className="font-medium">Share link</div>
          <div className="flex gap-2.5">
            <input
              type="text"
              className="flex-1 border border-[#DBDEE3] rounded px-3 py-3 bg-gray-100 text-gray-400"
              value={shareLink}
              disabled
            />
            <button
              className="flex items-center gap-1 cursor-pointer border border-[#DBDEE3] rounded px-3 py-3 hover:bg-gray-100"
              onClick={handleCopy}
              type="button"
            >
              <img src="/sharelink.svg" alt="Copy link" className="w-4 h-4" />
              Copy
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default InviteMemberModal;