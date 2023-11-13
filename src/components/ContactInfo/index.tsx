export function ContactInfo() {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <tbody>
          <tr className="m-0 p-0">
            <td className="px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              <a
                href="https://wa.me/5566992197205"
                target="_blank"
                rel="noopener noreferrer"
              >
                +55 (66) 99219-7205
              </a>
            </td>
            <td className="px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              <a
                href="mailto:johanvilela@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                johanvilela@hotmail.com
              </a>
            </td>
          </tr>
          <tr className="m-0 p-0">
            <td className="px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              <a
                href="https://www.linkedin.com/in/johanvilela"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.linkedin.com/in/johanvilela
              </a>
            </td>
            <td className="px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              <a
                href="https://www.github.com/johanvilela"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.github.com/johanvilela
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
